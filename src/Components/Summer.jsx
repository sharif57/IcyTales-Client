const Summer = () => {
    return <div>
        <div
            className="bg-inherit  bg-no-repeat bg-bottom bg-right bg-indigo-500 "
            style={{ backgroundImage: `url('/Image (30).png')` }}
        >
            <div className=" container mx-auto ">
                <div className="flex items-center justify-around">
                    <div className=" flex-col space-y-14" >
                        <img className="size-11" src="/Figure → relive-triangle.png.png" alt="" />
                        <img className="chat-image size-10 w-16  " src="/Figure → special-doted.png.png" alt="" />


                    </div>
                    <div className="space-y-4 text-white">
                        <h1 className="text-7xl font-bold text-white w-10">Summer
                            Special!</h1>
                        <p>Buy One Sundae, Get One 50% Off!</p>
                        <div className="flex items-center gap-2 pt-4">
                            <button className="btn btn-outline text-white">Get This Deal</button>
                            <p>Use code: SUMMER50 at checkout.</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex">
                            <p className=" bg-pink-500 rounded-full ">50%</p>
                            <img src="/Figure → special-dotedarrow.png.png" alt="" />
                        </div>
                        <img src="/Figure → special-image.png.png" alt="" />
                    </div>
                </div>
            </div>

            <img src="" alt="" />

        </div>
    </div>;
};
export default Summer;