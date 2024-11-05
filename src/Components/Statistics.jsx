const Statistics = () => {


    const items = [
        {
            num: '91+',
            title: 'Awards Win'
        },
        {
            num: '49%',
            title: 'Satisified Clients'
        },
        {
            num: '20+',
            title: 'Years of Experience'
        },
        {
            num: '100+',
            title: 'Employees Working'
        },
    ]

    return <div className="mt-16">
        <div className="text-center space-y-3">
            <h1 className="text-5xl font-bold">Our <span className="text-pink-500">Statistics</span></h1>
            <p>What makes us special through our impressive statistics.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 w-5/6 mx-auto mt-16 gap-8">
            {
                items.map((item, index) => <div key={index} className="p-6 border-b-4 border-pink-600 shadow-lg rounded-lg text-center rounded-l-2xl">
                    <h1 className="text-6xl font-bold">{item.num}</h1>
                    <p>{item.title}</p>
                </div>)
            }
        </div>
    </div>;
};
export default Statistics;