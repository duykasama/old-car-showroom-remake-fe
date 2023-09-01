import Service from "./Service";
import services from '../../../../data/services.json';

function WebInfo() {
    return ( <section>
        <div className="flex gap-6">
            {services.map(service => <Service key={service.id} title={service.service} description={service.description} img={service.img} />)}
            {/* <Service title={"Car Posting"}  /> */}
        </div>
    </section> );
}

export default WebInfo;