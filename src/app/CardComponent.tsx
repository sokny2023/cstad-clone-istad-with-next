export default function CardCourseComponent() {
    return(
        <>
        <h1 className="ml-32 text-2xl font-medium mt-10">COURSE</h1>
        <section className="w-10/12 mx-auto grid grid-cols-2 mt-10 gap-8">
            <FlutterCard/>
            <IosCard/>
            <SqlCard/>
            <WebCard/>
            <FlutterCard/>
            <IosCard/>
            <SqlCard/>
            <WebCard/>
      </section>
        </>
    );
}

export function FlutterCard() {
    return (
        <div className="w-full border border-gray-200 max-w-[700px] h-full min-h-[180px] rounded-[10px] grid grid-cols-3 md:grid-cols-4 justify-center items-center mx-auto p-2 bg-gray-50">
            <div className="col-span-1 w-full h-full flex justify-center items-center m-2">
                <img src="https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png" alt="" className="object-contain max-w-full max-h-full" />
            </div>
            <div className="col-span-2 min-w-[100px] m-2 flex flex-col justify-between">
                <h1 className="font-semibold mb-4">FLUTTER MOBILE DEVELOPMENT</h1>
                <div className="w-full h-auto m-1">
                    <h1 className="bg-[#DC3545] text-center inline-block m-1 px-2 text-white rounded-[10px]">20% Scholarship</h1>
                </div>
                <h1 className="line-clamp-1 text-[1rem] text-gray-700">Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.</h1>
            </div>
            <div className="col-span-3 md:col-span-1 w-full h-full md:min-w-[80px] my-auto mx-1 flex flex-row justify-between px-4 md:flex-col md:items-start md:justify-normal md:pl-4">
                
                <h1 className="md:py-4 ">80 hours</h1>
                <h1>Medium</h1>
            </div>
        </div>
    );
}

export function IosCard() {
    return (
        <div className="w-full border border-gray-200 max-w-[700px] h-full min-h-[180px] rounded-[10px] grid grid-cols-3 md:grid-cols-4 justify-center items-center mx-auto p-2 bg-gray-50">
            <div className="col-span-1 w-full h-full flex justify-center items-center m-2">
                <img src="https://api.istad.co/media/image/4709913c-3dd4-4896-8b05-ba6f7fd074ba.png" alt="" className="object-contain max-w-full max-h-full" />
            </div>
            <div className="col-span-2 min-w-[100px] m-2 flex flex-col justify-between">
                <h1 className="font-semibold mb-4">IOS DEVELOPMENT</h1>
                <div className="w-full h-auto m-1">
                    <h1 className="bg-[#DC3545] text-center inline-block m-1 px-2 text-white rounded-[10px]">20% Scholarship</h1>
                </div>
                <h1 className="line-clamp-1 text-[1rem] text-gray-700">iOS Development is designed for students to get started with design iOS App Concepts. This course will focus on languages syntax since basic levels and start to implement real user interfaces following with great user experiences and integrate others iOS features.</h1>
            </div>
            <div className="col-span-3 md:col-span-1 w-full h-full md:min-w-[80px] my-auto mx-1 flex flex-row justify-between px-4 md:flex-col md:items-start md:justify-normal md:pl-4">
                
                <h1 className="md:py-4 ">80 hours</h1>
                <h1>Medium</h1>
            </div>
        </div>
    );
}

export function SqlCard() {
    return (
        <div className="w-full border border-gray-200 max-w-[700px] h-full min-h-[180px] rounded-[10px] grid grid-cols-3 md:grid-cols-4 justify-center items-center mx-auto p-2 bg-gray-50">
            <div className="col-span-1 w-full h-full flex justify-center items-center m-2">
                <img src="https://api.istad.co/media/image/354762b5-e27a-40ac-93c3-6de5cdb0362f.png" alt="" className="object-contain max-w-full max-h-full" />
            </div>
            <div className="col-span-2 min-w-[100px] m-2 flex flex-col justify-between">
                <h1 className="font-semibold mb-4">SQL & DATA MODELING WITH POSTGRESQL</h1>
                <div className="w-full h-auto m-1">
                    <h1 className="bg-[#DC3545] text-center inline-block m-1 px-2 text-white rounded-[10px]">20% Scholarship</h1>
                </div>
                <h1 className="line-clamp-1 text-[1rem] text-gray-700">iOS Development is SQL & Data Modeling with PostgreSQL is designed to help you understand in project analyze, database design and normalized data follow requirements from clients and Modeling the business flows. Please see the details course offers below,</h1>
            </div>
            <div className="col-span-3 md:col-span-1 w-full h-full md:min-w-[80px] my-auto mx-1 flex flex-row justify-between px-4 md:flex-col md:items-start md:justify-normal md:pl-4">
                
                <h1 className="md:py-4 ">80 hours</h1>
                <h1>Medium</h1>
            </div>
        </div>
    );
}

export function WebCard() {
    return (
        <div className="w-full border border-gray-200 max-w-[700px] h-full min-h-[180px] rounded-[10px] grid grid-cols-3 md:grid-cols-4 justify-center items-center mx-auto p-2 bg-gray-50">
            <div className="col-span-1 w-full h-full flex justify-center items-center m-2">
                <img src="https://api.istad.co/media/image/3a3d2bf2-670b-4f2f-a72a-b9b8ba3a0f38.png" alt="" className="object-contain max-w-full max-h-full" />
            </div>
            <div className="col-span-2 min-w-[100px] m-2 flex flex-col justify-between">
                <h1 className="font-semibold mb-4">WEB DESIGN</h1>
                <div className="w-full h-auto m-1">
                    <h1 className="bg-[#DC3545] text-center inline-block m-1 px-2 text-white rounded-[10px]">20% Scholarship</h1>
                </div>
                <h1 className="line-clamp-1 text-[1rem] text-gray-700">iOS Development is Web Design course is designed for students to get started with Design Website Concepts. This course will focus on basic and advanced layout of website plus responsive design including UI/UX Design Concept. Moreover, CMS & Dynamic content with hosting application to access in public.</h1>
            </div>
            <div className="col-span-3 md:col-span-1 w-full h-full md:min-w-[80px] my-auto mx-1 flex flex-row justify-between px-4 md:flex-col md:items-start md:justify-normal md:pl-4">
                
                <h1 className="md:py-4 ">80 hours</h1>
                <h1>Medium</h1>
            </div>
        </div>
    );
}

