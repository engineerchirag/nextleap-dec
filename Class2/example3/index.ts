class ProductBasicDetail {
  name: string;
  id: string;
  description: string;

  constructor(name: string, id: string, des: string) {
    this.name = name;
    this.id = id;
    this.description = des;
  }

  printBasicDetails(): string {
    return `Product details - Name: ${this.name}, Description: ${this.description}`;
  }
}

const product1 = new ProductBasicDetail(
  "Product1",
  "123",
  "Description goes here"
);

const details: string = product1.printBasicDetails();

class DigitalProductDetail extends ProductBasicDetail {
  platform: string[];

  constructor(name: string, id: string, des: string, platform: string[]) {
    super(name, id, des);
    this.platform = platform;
  }

  printDetail(): void {
    console.log(this);
  }
}

const digitalProductDetail1 = new DigitalProductDetail(
  "Product1",
  "123",
  "Description goes here",
  ["Myntra"]
);
