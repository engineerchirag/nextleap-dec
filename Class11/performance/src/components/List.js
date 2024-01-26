import {
  useCallback,
  useDeferredValue,
  useRef,
  useState,
  useTransition,
} from "react";
import { useMemo } from "react";

const feedData = [...Array(100000)].map((_, idx) => ({
  id: `${idx + 1}`,
  title: `Title ${idx + 1}`,
  likes: 10 * Math.ceil(Math.random()) * idx,
}));

const List = ({ feeds }) => {
  return (
    <ul>
      {feeds.map((feed) => (
        <li key={feed.id}>{feed.title}</li>
      ))}
    </ul>
  );
};

const InputSearch = ({  handleSearch, deferredText }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search feed with title"
        onChange={handleSearch}
      />
      {/* {deferredText} */}
    </>
  );
};

const FeedList = ({ heading }) => {
  const [searchText, setSearchText] = useState("");
  const deferredText = useDeferredValue(searchText, 1000);
  const [feeds, setFeeds] = useState(feedData);
  const [isPending, startTransition] = useTransition();
  const newFeedRef = useRef("");

  const totalLikes = useMemo(() => {
    console.log("Recompute");
    return feeds.reduce((acc, item) => {
      acc += item.likes;
      return acc;
    }, 0);
  }, [feeds]);

  const handleSearch = useCallback((e) => {
    setSearchText(e.target.value);
    startTransition(() =>
      setFeeds((prevFeeds) => {
        const newFeeds = feedData.filter((feed) =>
          feed.title.toLowerCase().includes(e.target.value.toLowerCase())
        );
        return newFeeds;
      })
    );
  }, []);

  const handleAdd = (e) => {
    if (e.key === "Enter") {
      const newFeed = {
        id: feeds.length + 1,
        title: newFeedRef.current.value,
        likes: 0,
      };

      setFeeds((prevState) => {
        return [newFeed, ...prevState];
      });

      newFeedRef.current.value = "";
      console.log(newFeed);
    }
  };

  return (
    <div>
      <h1>{heading}</h1>
      <InputSearch  handleSearch={handleSearch} deferredText={deferredText} />
      {isPending ? "Loading..." : ""}
      <Likes totalLikes={totalLikes} />
      <input
        ref={newFeedRef}
        type="text"
        placeholder="Add New Item"
        onKeyUp={handleAdd}
      />
      <List feeds={feeds} />
    </div>
  );
};

const Likes = ({ totalLikes }) => {
    return (
        <div>Total Likes: {totalLikes}</div>
    )
}

export default FeedList;
