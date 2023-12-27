interface IProduct {
    name: string;
    id: string;
    description: string;
    price: number;
    printBasicDetails(): string;
    getTotalPrice(tax: number): number;    
}

class PBasicDetail implements IProduct {
    name;
    id;
    description;
    price;
  
    constructor(name: string, id: string, des: string, price: number) {
      this.name = name;
      this.id = id;
      this.description = des;
      this.price = price;
    }
  
    printBasicDetails() {
      return `Product details - Name: ${this.name}, Description: ${this.description}`;
    }

    getTotalPrice(tax: number): number {
        return this.price * tax * 0.01 + this.price;
    }
  }
  
  const product10: IProduct = new PBasicDetail(
    "Product1",
    "123",
    "Description goes here",
    400
  );
  
const details10: string = product10.printBasicDetails();
const totalPrice = product10.getTotalPrice(300);

  
//   class PDigitalDetail extends PBasicDetail {
//     platform: string[];
  
//     constructor(name: string, id: string, des: string, platform: string[]) {
//       super(name, id, des);
//       this.platform = platform;
//     }
  
//     printDetail(): void {
//       console.log(this);
//     }
//   }
  
//   const digitalProductDetail10 = new DigitalProductDetail(
//     "Product1",
//     "123",
//     "Description goes here",
//     ["Myntra"]
//   );


