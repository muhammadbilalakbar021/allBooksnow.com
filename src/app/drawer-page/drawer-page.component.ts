import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-drawer-page',
  templateUrl: './drawer-page.component.html',
  styleUrls: ['./drawer-page.component.scss']
})
export class DrawerPageComponent implements OnInit {
  ngOnInit() { }

  constructor(private router: Router) { }
  images = [1, 2, 3];
  set;
  home = 1;


  Algorithms = true;
  Artificial_Intelligence = false;

  Computer_Graphics = false;
  Computer_Networks = false;
  Computer_Communications_and_Networks = false;
  Compiler_Design_and_Construction = false;

  Database_Systems = false;
  Data_Structures_and_Algorithms = false;
  Data_Security_and_Encryption = false;
  Data_Mining = false;
  Data_Visualization = false;
  Data_Warehousing = false;
  Design_and_Analysis_of_Algorithms = false;
  Design_Pattern = false;
  Discrete_Structures = false;
  Digital_Image_Processing = false;
  Distributed_Systems = false;

  Formal_Methods_in_Software_Engineering = false;
  Formal_Methods = false;

  Geometric_Modeling = false;

  Human_Computer_Interaction = false;

  Introduction_to_Computing = false;
  Introduction_to_ICT = false;
  Introduction_to_Software_Engineering = false;
  Introduction_to_Computer_Programming = false;

  Machine_Learning = false;

  Natural_Language_Processing = false;

  Operating_Systems_Concepts = false;
  Object_Oriented_Programming = false;
  Object_Oriented_Software_Engineering = false;

  Programming_Fundamentals = false;
  Professional_Practices_for_IT = false;

  Reverse_Engineering = false;

  Software_Quality_Engineering = false;
  Software_Project_Management = false;
  Software_Testing = false;
  Software_Design_and_Architecture = false;
  Software_Requirement_Engineering = false;

  Theory_of_Automata = false;
  Theory_of_Computation = false;

  Web_Technologies = false;
  Wireless_and_Mobile_Computing = false;

  display(s) {

    // window.scrollBy(0, 500)
    window.scrollTo(0,0);

    this.Algorithms = false;
    this.Artificial_Intelligence = false;

    this.Computer_Graphics = false;
    this.Computer_Networks = false;
    this.Computer_Communications_and_Networks = false;
    this.Compiler_Design_and_Construction = false;

    this.Database_Systems = false;
    this.Data_Structures_and_Algorithms = false;
    this.Data_Security_and_Encryption = false;
    this.Data_Mining = false;
    this.Data_Visualization = false;
    this.Data_Warehousing = false;
    this.Design_and_Analysis_of_Algorithms = false;
    this.Design_Pattern = false;
    this.Discrete_Structures = false;
    this.Digital_Image_Processing = false;
    this.Distributed_Systems = false;

    this.Formal_Methods_in_Software_Engineering = false;
    this.Formal_Methods = false;

    this.Geometric_Modeling = false;

    this.Human_Computer_Interaction = false;

    this.Introduction_to_Computing = false;
    this.Introduction_to_ICT = false;
    this.Introduction_to_Software_Engineering = false;
    this.Introduction_to_Computer_Programming = false;

    this.Machine_Learning = false;

    this.Natural_Language_Processing = false;

    this.Operating_Systems_Concepts = false;
    this.Object_Oriented_Programming = false;
    this.Object_Oriented_Software_Engineering = false;

    this.Programming_Fundamentals = false;
    this.Professional_Practices_for_IT = false;

    this.Reverse_Engineering = false;

    this.Software_Quality_Engineering = false;
    this.Software_Project_Management = false;
    this.Software_Testing = false;
    this.Software_Design_and_Architecture = false;
    this.Software_Requirement_Engineering = false;

    this.Theory_of_Automata = false;
    this.Theory_of_Computation = false;

    this.Web_Technologies = false;
    this.Wireless_and_Mobile_Computing = false;

    if (s == "Discrete Structures") {
      this.set = "Discrete Structures"
      this.Discrete_Structures = true;
    }
    else if (s == "Object Oriented Software Engineering") {
      this.set = "Object Oriented Software Engineering";
      this.Object_Oriented_Software_Engineering = true;
    }
    else if (s == "Introduction to Software Engineering") {
      this.set = "Introduction to Software Engineering";
      this.Introduction_to_Software_Engineering = true;
    }
    else if (s == "Algorithms") {
      this.set = "Algorithms";
      this.Algorithms = true;
    }
    else if (s == "Artificial Intelligence") {
      this.Artificial_Intelligence = true;
    }
    else if (s == "Programming Fundamentals") {
      this.Programming_Fundamentals = true;
    }
    else if(s== "Computer Graphics"){
      this.Computer_Graphics=true;
    }
    else if(s=="Computer Networks")
    {
      this.Computer_Networks=true;
    }
    else if(s=="Compiler Design and Construction")
    {
      this.Compiler_Design_and_Construction=true;
    }
    else if(s=="Database Systems")
    {
      this.Database_Systems=true;
    }
    else if(s=="Data Structures and Algorithms")
    {
      this.Data_Structures_and_Algorithms=true;
    }
    else if(s=="Data Security and Encryption")
    {
      this.Data_Security_and_Encryption=true;
    }
    else if(s=="Data Mining")
    {
      this.Data_Mining=true;
    }
    else if(s=="Data Visualization")
    {
      this.Data_Visualization=true;
    }
    else if(s=="Data Warehousing")
    {
      this.Data_Warehousing=true;
    }
    else if (s=="Design Pattern")
    {
      this.Design_Pattern=true;
    }
    else if(s=="Design and Analysis of Algorithms")
    {
      this.Design_and_Analysis_of_Algorithms=true;
    }


    //  function scrollWin() {
    //   window.scrollBy(0, 100);
    // }
  }



}
