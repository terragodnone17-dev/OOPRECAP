//3 var//======================================================================================================
let Name ="Cabili MARC";
let Strand = "BSCS";
let Section = "3A";
const gardeunta = 95;
const gardeuntb = 96;
// LIterals//======================================================================================================

const literals1 = {
    name: "literal1",
    strand: "literal1",
    section: "literal1 3A",

    PrintAkunName() {
        console.log(`Creator Name: ${this.name}`);
    },
    PrintAkunStrand() {
        console.log(`Creator Strand: ${this.strand}`);
    },
    PrintAkunSection() {
        console.log(`Creator Section: ${this.section}`);
    }
};

const literals2 ={
    name: "literal2 Cabili MARC",
    strand: "literal2 BSCS",
    section: "literal2 3A",

    PrintAkunName2(){
        console.log(`Creator Name: ${this.name}` );
    },
    PrintAkunStrand2(){
        console.log(`Creator Strand: ${this.strand}`);
        
    },
    PrintAkunSection2(){
        console.log(`Creator Section: ${this.section}`);
    }


};


// 3array//======================================================================================================
let GroupMem = ["Cabili", "Floralde", "Gelomio"];
let Titleofresearch = ["Whispers of the Past", " Unveiling the Secrets"," The Haunted Mansion"];
let ref = ["sdf2", "sdf3", "sdf4"];
// 3 conditional//======================================================================================================
    if (Name == "Cabili MARC" && Strand == "BSCS" && Section == "3A"){
        console.log("=================================");
        console.log("This is If Statement if Value Name = Cabili Marc, Strand = Bscs, Section  = 3a ");
        console.log("OOP Recap Activity");
        console.log("=================================");
    }
    if (gardeunta == 90){
        console.log("=================================");
        console.log("This is If Statement if value garde is equal to 90");
        console.log(this.GroupMem);
        console.log("=================================");
    }else if (gardeunta >= 90){
        console.log("=================================");
        console.log("This is If else statement if value garde is greater than 90");
        console.log("=================================");
    }
    if (Titleofresearch[0] == "Whispers of the Past" && Titleofresearch[1] == "Unveiling the Secrets" && Titleofresearch[2] == "The Haunted Mansion"){
        console.log("=================================");
        console.log("Original Array value: ");
        console.log(this.Titleofresearch);
        console.log("=================================");
    }
    let i = "switch";
    switch(i){
        case "switch":
            console.log("This is Switch Statement");
        break;
        case "switch1":
            console.log("This is Switch Statement 1");
        break;
        default:
            console.log("This is Default Statement");
    }



// 4class abs,inhe, poly, encapsulation//======================================================================================================
class Abstract1{


    Abstractreplaceval(name, Strand, Section){
        this.Name = name;
        this.Strand = Strand;
        this.Section = Section;
        console.log("===============================");
        console.log("This is the Abstraction Part");
        console.log("Value Replace");

    }
    Abstrackprintval(){
        console.log("===============================");
        console.log("Name: " + this.Name);
        console.log("Strand: " + this.Strand);
        console.log("Section: " + this.Section);
        console.log("===============================");
    }
}
class inherit1 extends Abstract1{
    inheritpart1(){
        this.Name = "inheritCabili MARC";
        this.Strand = "inheritBSCS";
        this.Section = "inherit3A";
        console.log("===============================");
        console.log("This is the Inheritance Part 1");
        console.log("===============================");
        console.log("Name: " + this.Name);
        console.log("Strand: " + this.Strand);
        console.log("Section: " + this.Section);
        console.log("===============================");
    }
        inheritpart2(){
        this.Name3 = "inheritCabili MARC part2 ";
        this.Strand3 = "inheritBSCS Part2 ";
        this.Section3 = "inherit3A Part 2 ";
        console.log(" Inheritance Part 2");
        console.log("===============================");
        console.log("Name: " + this.Name3);
        console.log("Strand: " + this.Strand3);
        console.log("Section: " + this.Section3);
        console.log("===============================");
    }
}
class polymorphism1 extends inherit1{
 Name = "marcdefualt";
 Strand = "BSCSDefualt";
 Section = "3A Default";

    inheritpart1(name1, Strand1, Section1){
        this.Name = name1;
        this.Strand = Strand1;
        this.Section = Section1;
        console.log("===============================");
        console.log("This is the Polymorphism1 Part 1");
        console.log("===============================");
        console.log("Name: " + this.Name);
        console.log("Strand: " + this.Strand);
        console.log("Section: " + this.Section);
        console.log("===============================");
    }

}
class encapsulation1 extends polymorphism1{
    #nameencap = "encapsulationCabili";

    encapsulationpart1(name1Encapsulationtesting){
        this.#nameencap = name1Encapsulationtesting;
        console.log("This is the Encapsulation Part 1");
        console.log("Name: " + this.#nameencap);
        console.log("=================================");
    }
    encapsulationpart2(name1Encapsulationtesting){
        this.#nameencap = name1Encapsulationtesting;
        console.log("This is the Encapsulation Part 2");
        console.log("Name: " + this.#nameencap);
        console.log("=================================");
    }
    get testingGetter(){
        console.log ("This is the Getter Part");
        console.log("=================================");
    }
        get testingGetter2(){
        console.log ("This is the Getter Part2");
        console.log("=================================");
    }
        get testingGetter3(){
        console.log ("This is the Getter Part3");
        console.log("=================================");
    }
        get testingGetter4(){
        console.log ("This is the Getter Part4");
        console.log("=================================");
    }
}
class OverAll extends encapsulation1{
    //testing No Val
}




//objects//======================================================================================================

let classtesting = new encapsulation1();
let classtestingobject = new encapsulation1();
let AbstractOb = new encapsulation1();
let polymorphism = new polymorphism1();
let encapsulationob = new encapsulation1();
let inherit1object = new inherit1();

let AllClass = new OverAll();


//---------


// console.log("=================================");
// console.log("This is the Looping Part");

// for(let i = 0; i < 5; i++){
//      console.log(i);
// }
// console.log("--------------------");
// for(let x = 2; x < 5; x++){
//     console.log(x);
// }
// console.log("--------------------");
// for(let p = 4; p < 5; p++){
//     console.log(p);   
// }
// console.log("=================================");



//methods//======================================================================================================

polymorphism.inheritpart1("etst", "aasd", "ads"); //Polymorphism replace val from inheretance
AllClass.inheritpart2();
classtesting.encapsulationpart1("testing encapsulation"); //encapsulation
classtesting.Abstractreplaceval("Cabili MARC", "BSCS", "3A");//Replace val abstract class
classtesting.Abstrackprintval();//Prnt val drom user input Abstractreplaceval base on above

console.log("This is Literals");
console.log(literals1.name);
console.log(literals2.name);

encapsulationob.testingGetter;
encapsulationob.testingGetter2;
encapsulationob.testingGetter3;
encapsulationob.testingGetter4;

console.log("======================================");
console.log("This is Literals Part 1");
literals1.PrintAkunName();
literals1.PrintAkunSection();
literals1.PrintAkunStrand();
console.log("======================================");
console.log("This is Literals Part 2");
literals2.PrintAkunName2();
literals2.PrintAkunSection2();
literals2.PrintAkunStrand2();
console.log("======================================");