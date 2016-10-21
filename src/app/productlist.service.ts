export class ProductList{
    allProducts = [];
    
    constructor(){
        console.log('pordluctlist')
        this.allProducts.push({'title': 'LG leon 4g LTE mobile', 'imageUrl': '../assets/img1.jpg', 'city': 'Karachi', 'state': 'Sindh', 'category': 'Phones','cell': '03001234567', 'description': 'LG leon (lgms345) for sell good condition 9.5/10. Camera 13MP, Battery Backup 15Hrs, Urgent Sale', 'price': '8500'});
        
        this.allProducts.push({'title': 'Lenovo Laptop E88C1', 'imageUrl': '../assets/img2.jpg', 'city': 'Hyderabad', 'state': 'Sindh', 'category': 'Computers','cell': '03001234567', 'description': 'Laptop exchange possible with android phone Laptop configuration: 2.2ghz Processor, 80gb HDD, 1GB RAM, DVD Rom,  Wifi, Bluetooth, SIM slot Only battery is week', 'price': '13000'});

        this.allProducts.push({'title': 'Apple iPhone 4s 32gb', 'imageUrl': '../assets/img3.png', 'city': 'Multan', 'state': 'Punjab', 'category': 'Phones','cell': '03001234567', 'description': 'Apple iphone 4s 32gb selling in condition 8/10 no fault and original sealed set h or back side glass p scratches h or sirf set or cable hai only serious buyers can contact me please and no exchange', 'price': '11000'});

        this.allProducts.push({'title': 'Galaxy Note 4 edge 4g', 'imageUrl': '../assets/img4.jpeg', 'city': 'Karachi', 'state': 'Sindh', 'category': 'Phones','cell': '03001234567', 'description': 'Note 4 edge for sale in black colour. Original not refurbished .T Mobile Sealed and perfect working 3GB, 32GB 4g LTE N915T model 16 back cam and 5 front Condition 10/10 as seen in pics', 'price': '29500'});

        this.allProducts.push({'title': 'Honda City 2005', 'imageUrl': '../assets/img5.jpg', 'city': 'Lahore', 'state': 'Punjab', 'category': 'Cars', 'cell': '03001234567', 'description': 'Model 2005, Child AC, Alarm, CNG + Petrol with New radiator, DVD player back camera + LCD, 3 pc touch-up Just buy and drive', 'price': '655000'});

        this.allProducts.push({'title': 'Samsung Note 3', 'imageUrl': '../assets/img6.jpg', 'city': 'Peshawar', 'state': 'KPK', 'category': 'Phones','cell': '03001234567', 'description': 'Note e Mint condition h 10/9.5 koi fault ni h cash k zroorat h jldi sell krna h serious buyers plz contact', 'price': '17000'});

        this.allProducts.push({'title': 'Hp Core i5 Elitebook', 'imageUrl': '../assets/img7.JPG', 'city': 'Karachi', 'state': 'Sindh', 'category': 'Computers','cell': '03001234567', 'description': 'Core i5 2.4ghz, 4GB, 250GB HDD, DVD RW, WebCam, Charger, Imported PC ,1 to 1.5 Hour Battery Time', 'price': '16000'});

        this.allProducts.push({'title': 'LG G3 LS-990', 'imageUrl': '../assets/img8.jpg', 'city': 'Karachi', 'state': 'Sindh', 'category': 'Phones','cell': '03001234567', 'description': 'LG G3 LS-990 3GB Ram 32GB Internal Memory, 13MP Back Camera, 2.1MP Front Camera, Ultra High Speed, No scratch no faults, Battery timing awsome.. Scratchless condition', 'price': '13500'});

    }
    getProductList(){
        return this.allProducts;
    }

    public addProduct(product){
        this.allProducts.push(product);
    }

}