import React from 'react';
import NavBar from '../navbar';

class Projects extends React.Component{
    state={

    }

    render(){
        return (
            <div className='Project Box'>
                <head>
                    <title>Biznetconnects.com</title>

                </head>
                    <body>
                    <div class="container">
	    <div class="row">
		<div class="col-sm-3 col-md-3 col-lg-3 test">
		 
		</div>
		<div class="col-sm-9 col-md-9 col-lg-9 test hidden-sm hidden-xs">
		 <h1>BiznetConnect.net</h1>
		</div>
         <p class="skipnavigation"><a href="#contentstart">Skip navigation</a></p> 
         <header>
         </header>
		</div>
		<div class="row">
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <a class="navbar-brand" href="index.html">BNC.Net</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li class="active"><a href="index.html">Home</a></li>
            <li><a href=".html">My Network</a></li>
            <li><a href=".html">Jobs</a></li>
			<li><a href=".html">Messaging</a></li>
			<li><a href=".html">Notifications</a></li>
      </ul>
	 </div>
	</div>
   </nav>

		 <div class="row">
		 	<div class="col-sm-9 col-md-9 col-lg-9 test">
		 <article>
            <p>Get connected, business to business</p>
         </article>
			</div>
		   </div>
		  </div>
			<div class="col-sm-3 col-md-3 col-lg-3 test hidden-xs">
		 <aside>
            <h2 id="contentstart">Upcoming Events</h2>
            <p class="accent">6/23</p>
            <p>Web Design</p>
            <p class="accent">7/25</p>
            <p>Elevator Pitch</p>
            <p class="accent">8/1</p>
            <p>Funding</p>
         </aside>
			</div>
		 </div>
		 <div class="row">
         <footer>
            <p>c/o BiznetConnects</p>
            <p>1774 Magnolia Ln N</p>
            <p>Plymouth, MN, 55441</p>
            <p>(763)-276-5836</p>
         </footer>
		 </div>
         <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"></link>
	  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
      <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
            </body>
        </div>

        )
    }
}
export default Projects;