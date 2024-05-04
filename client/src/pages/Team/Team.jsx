import React, { Fragment } from "react"
import Header from "../../components/Header/Header"
import Card from "../../components/MemberCard/Card"

const Team = () => {

const TeamMembers1 = [
    {
        name: "Syeda",
        year: "Sophomore",
        contribution: "(Team Page)",
        profileLink: "https://www.linkedin.com/in/syeda-wasiq-3a2160b4",
        image: ""
    },{
        name: "Syeda",
        year: "Sophomore",
        contribution: "(Team Page)",
        profileLink: ""
    },{
        name: "Syeda",
        year: "Sophomore",
        contribution: "(Team Page)",
        profileLink: ""
    },{
        name: "Syeda",
        year: "Sophomore",
        contribution: "(Team Page)",
        profileLink: ""
    },
]
const TeamMembers2 = [
    {
        name: "Syeda",
        year: "Sophomore",
        contribution: "(Team Page)",
        profileLink: ""
    },{
        name: "Syeda",
        year: "Sophomore",
        contribution: "(Team Page)",
        profileLink: ""
    },{
        name: "Syeda",
        year: "Sophomore",
        contribution: "(Team Page)",
        profileLink: ""
    },{
        name: "Syeda",
        year: "Sophomore",
        contribution: "(Team Page)",
        profileLink: ""
    },
]

  return (
    <Fragment>
    {/* // <div className="h-full"> */}

    <Header></Header>
    <div className="cards-container">
            <div className="flex justify-center my-8 text-slate-600">
                <h1>Our Team</h1>
            </div>
            <div className="card-container">
            {
                TeamMembers1.map((member) => (
                    <Card className="" data={member}></Card>
                    ))
            }
            </div>
            <div className="card-container">
             {
                TeamMembers2.map((member) => (
                    <Card className="" data={member}></Card>
                    ))
            }
            </div>
        </div>
    
    {/* // </div> */}
    </Fragment>
    
    
  )
}

export default Team