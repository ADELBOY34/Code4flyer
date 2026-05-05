import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";

function SideBar() {
  return (
   <Sidebar breakPoint="md" rootStyles={{
        backgroundColor: "#0b0b0b",
        border: "none",
        width:"150px",
        minWidth: "150px",
         [".ps-sidebar-container"]: {   // ← cible le container intérieur
      backgroundColor: "#e6eeed",
    }
      }}>
  <Menu menuItemStyles={{
          button: {
            backgroundColor: "#e6eeed",
            color: "#091211",
            "&:hover": {
              backgroundColor: "#198c77",
              color: "#ffffff",
            },
          },
           
        }}>

    {/* 1. INTRO */}
    <SubMenu label="Get Started" component={<Link to="/typescript/getstarted" />}>
      <MenuItem component={<Link to="/typescript/getstarted" />} >What is TypeScript ?</MenuItem>
      <MenuItem component={<Link to="/typescript/getstarted" />}>Why TypeScript ?</MenuItem>
      <MenuItem component={<Link to="/typescript/getstarted" />}>JavaScript vs TypeScript</MenuItem>
    </SubMenu>

    <MenuItem>Installation</MenuItem>

    {/* 2. BASICS */}
    <SubMenu label="Basics" >
      <MenuItem component={<Link to="/typescript/basics" />}>Types (string, number, boolean)</MenuItem>
      <MenuItem>Type Inference</MenuItem>
      <MenuItem>Any vs Unknown</MenuItem>
      <MenuItem>Arrays & Objects</MenuItem>
    </SubMenu>

    {/* 3. FUNCTIONS */}
    <SubMenu label="Functions">
      <MenuItem>Typing Functions</MenuItem>
      <MenuItem>Optional Parameters</MenuItem>
      <MenuItem>Return Types</MenuItem>
    </SubMenu>

    {/* 4. OBJECT ORIENTED PROGRAMMING */}
    <SubMenu label="OOP (Classes)">
      <MenuItem>Classes</MenuItem>
      <MenuItem>Access Modifiers</MenuItem>
      <MenuItem>Inheritance</MenuItem>
      <MenuItem>Polymorphism</MenuItem>
    </SubMenu>

    {/* 5. INTERFACES */}
    <SubMenu label="Interfaces & Types">
      <MenuItem>Interfaces</MenuItem>
      <MenuItem>Type Aliases</MenuItem>
      <MenuItem>Extending Interfaces</MenuItem>
      <MenuItem>Difference Interface vs Type</MenuItem>
    </SubMenu>

    {/* 6. GENERICS */}
    <SubMenu label="Generics">
      <MenuItem>Introduction</MenuItem>
      <MenuItem>Generics with Functions</MenuItem>
      <MenuItem>Generics with Arrays</MenuItem>
      <MenuItem>Generics with Interfaces</MenuItem>
      <MenuItem>Generics with Classes</MenuItem>
    </SubMenu>
    <SubMenu label="TypeScript + React">
  <MenuItem>Setup React + TypeScript</MenuItem>
  <MenuItem>Typing Props</MenuItem>
  <MenuItem>Typing useState</MenuItem>
  <MenuItem>Typing useEffect</MenuItem>
  <MenuItem>Typing Events</MenuItem>
</SubMenu>

  </Menu>
</Sidebar>
  );
}

export default SideBar;