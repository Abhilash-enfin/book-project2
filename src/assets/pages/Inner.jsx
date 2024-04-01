import React from "react";

import BookList from "./bookList";
import DemoBookInfo from "./DemoBookInfo";
import ParentComponent from "./Demo";
// import Demo from "./demo";

function Inner() {   
  
  return (
    <div className="relative z-10 flex min-h-0 flex-auto flex-col h-full  p-5">
{/*  
      <h1>Book Management Application</h1> */}

      <BookList />
      {/* <ParentComponent /> */}
      {/* <DemoBookInfo /> */}

    </div>
  );
}

export default Inner;
