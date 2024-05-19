import React, { Fragment } from "react"
import Header from "../../components/Header/Header"
import Card from "../../components/MemberCard/Card"

const Team = () => {

const TeamMembers1 = [
    {
        id: 1,
        name: "Syeda",
        year: "Sophomore",
        contribution: "React developer",
        profileLink: "https://www.linkedin.com/in/syeda-wasiq-3a2160b4",
        image: "/default-profile-icon.png",
        isReactTeam: true,
        isApiTeam: false,
        isTeamLead: false,
        isMlTeam: false

    },{
        id: 2,
        name: "Sebastian Gutierrez",
        year: "Senior",
        contribution: "Team Lead. React, Google Maps API, and Machine Learning developer",
        profileLink: "https://www.linkedin.com/in/sebastian-gutierrez-363130216/",
        image: "/default-profile-icon.png",
        isReactTeam: true,
        isApiTeam: true,
        isTeamLead: true,
        isMlTeam: true
    },{
        id: 3,
        name: "Nathan Tran",
        year: "Junior",
        contribution: "React developer",
        profileLink: "https://www.linkedin.com/in/nathan-tran-190866265/",
        image: "/default-profile-icon.png",
        isReactTeam: true,
        isApiTeam: false,
        isTeamLead: false,
        isMlTeam: false
    },{
        id: 4,
        name: "Dinh Bui",
        year: "Senior",
        contribution: "React and Google Maps API developer",
        profileLink: "https://www.linkedin.com/in/dbui02/",
        image: "/default-profile-icon.png",
        isReactTeam: true,
        isApiTeam: true,
        isTeamLead: false,
        isMlTeam: false
    },
]
const TeamMembers2 = [
    {
        id: 5,
        name: "Chris Oosthuizen",
        year: "Junior",
        contribution: "Team Lead. Machine Learning developer",
        profileLink: "",
        image: "/default-profile-icon.png",
        isReactTeam: false,
        isApiTeam: false,
        isTeamLead: true,
        isMlTeam: true
    },{
        id: 6,
        name: "Parsa Motahar",
        year: "Junior",
        contribution: "React developer",
        profileLink: "",
        image: "/default-profile-icon.png",
        isReactTeam: true,
        isApiTeam: false,
        isTeamLead: false,
        isMlTeam: false
    },{
        id: 7,
        name: "Chase",
        year: "Junior",
        contribution: "UI designer",
        profileLink: "",
        image: "/default-profile-icon.png",
        isReactTeam: true,
        isApiTeam: false,
        isTeamLead: false,
        isMlTeam: false
    },{
        id: 8,
        name: "Syeda",
        year: "Sophomore",
        contribution: "(Team Page)",
        profileLink: "https://www.linkedin.com/in/syeda-wasiq-3a2160b4",
        image: "/default-profile-icon.png",
        isReactTeam: true,
        isApiTeam: false,
        isTeamLead: false,
        isMlTeam: false
    },
]

  return (
    <Fragment>
    {/* // <div className="h-full"> */}

    <Header></Header>
    <div className="cards-container bg-white px-12">
            <div className="flex justify-center my-8">
                <h1 className="font-bold mt-6 text-black">The Weather Wizards</h1>
            </div>
            <div className="card-container">
            {
                TeamMembers1.map((member) => (
                    <Card className="" data={member} key={member.id} 
                    isApiTeam={true} infoApi="belongs to API Team" 
                    isMlTeam={true} infoMl="belongs to ML Team"
                    isTeamLead={true} infoTeamLead="is a Team Lead" 
                    isReactTeam={true} infoReact="belongs to React Team"></Card>
                    )
                )
            }
            </div>
            <div className="card-container">
             {
                TeamMembers2.map((member) => (
                    <Card className="" data={member} key={member.id} 
                    isApiTeam={true} infoApi="belongs to API Team" 
                    isMlTeam={true} infoMl="belongs to ML Team"
                    isTeamLead={true} infoTeamLead="is a Team Lead" 
                    isReactTeam={true} infoReact="belongs to React Team"></Card>
                    ))
            }
            </div>
        </div>
    
    {/* // </div> */}
    </Fragment>
    
    
  )
}

export default Team