import Planes from "@/components/Planes";
import {eventItems} from "../data/constants/eventItems";
import {projectItems} from "../data/constants/projectItems";

const PlanesContainer = () =>{
  return(
    <Planes 
      eventTitle='Evnet List'
      eventDescription='These are the stories of our customers who have joined us with great
                        pleasure when using this crazy feature.'
      eventItems={eventItems}
      projectTitle="Project list"
      projectDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                          Totam, alias exercitationem id ut quod voluptates est.Veritatis distinctio quam cumque!"
      projectItems={projectItems}
    />
  );
};

export default PlanesContainer;