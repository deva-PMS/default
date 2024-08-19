"use client"
import { PlusCircleOutlined, SearchOutlined } from '@ant-design/icons';
import { Avatar, Card, Carousel, Col, Grid, Row } from 'antd';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const { useBreakpoint } = Grid

const HomePage = () => {
    const [hoveredCard, setHoveredCard] = useState(null as any);
    const screens = useBreakpoint()
    const router = useRouter()

    const contentStyle: React.CSSProperties = {
        height: "90vh",
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',

    };

    const cardData = [{
        id: 1,
        price: "100$",
        tittle: "Mi-Pac Floral Tapestry Backpack",
        image: "https://i5.walmartimages.com/asr/23cbc7c9-2352-4416-ac19-c2acc26ee421.b5edff022bf166870158cb17333feeff.jpeg"
    },
    {
        id: 2,
        price: "100$",
        tittle: "Mi-Pac Floral Tapestry Backpack",
        image: "https://i5.walmartimages.com/asr/23cbc7c9-2352-4416-ac19-c2acc26ee421.b5edff022bf166870158cb17333feeff.jpeg"
    },
    {
        id: 3,
        price: "100$",
        tittle: "Mi-Pac Floral Tapestry Backpack",
        image: "https://th.bing.com/th/id/OIP.G5gtnCooUtVD0BrLMlUBFQAAAA?rs=1&pid=ImgDetMain"
    }, {
        id: 4,
        price: "100$",
        tittle: "Mi-Pac Floral Tapestry Backpack",
        image: "https://i5.walmartimages.com/asr/23cbc7c9-2352-4416-ac19-c2acc26ee421.b5edff022bf166870158cb17333feeff.jpeg"
    }, {
        id: 5,
        price: "100$",
        tittle: "Mi-Pac Floral Tapestry Backpack",
        image: "https://th.bing.com/th/id/OIP.G5gtnCooUtVD0BrLMlUBFQAAAA?rs=1&pid=ImgDetMain"
    }, {
        id: 6,
        price: "100$",
        tittle: "Mi-Pac Floral Tapestry Backpack",
        image: "https://th.bing.com/th/id/OIP.G5gtnCooUtVD0BrLMlUBFQAAAA?rs=1&pid=ImgDetMain"
    }, {
        id: 7,
        price: "100$",
        tittle: "Mi-Pac Floral Tapestry Backpack",
        image: "https://i.pinimg.com/originals/bc/14/53/bc1453b7b8e971b48173e9bc92154f39.png"
    }, {
        id: 8,
        price: "100$",
        tittle: "Mi-Pac Floral Tapestry Backpack",
        image: "https://c4.wallpaperflare.com/wallpaper/316/638/348/cute-teddy-bear-toy-lovely-brown-wallpaper-preview.jpg"
    }
    ]

    return (
        <>
            <div className="relative ">
                <Carousel autoplay infinite={true}>
                    <div>
                        <div style={contentStyle} className="bg-[url('https://thumbs.dreamstime.com/z/toys-kids-child-collection-plastic-white-car-62551972.jpg')] ">
                        </div>
                    </div>
                    <div>
                        <div style={contentStyle} className="bg-[url('https://wallpaperaccess.com/full/4509437.jpg')] ">
                        </div>
                    </div>


                </Carousel>
                <div className='absolute top-[40%] left-[25%]'>
                    <h1 className=" text-3xl sm:text-4xl md:text-6xl  lg:text-6xl font-bold   ">
                        20% off on winter warmers
                    </h1>
                </div>
            </div>
            <h1 className=" text-3xl sm:text-4xl md:text-6xl  lg:text-6xl font-bold text-center my-20    ">
                We make you awesome
            </h1>


            <Row className='lg:px-40 sm:px-10 md:mx-5 px-5 '>
                {cardData.map((item) => {
                    const isHovered = hoveredCard === item.id;
                    return (
                        <Col xs={24} sm={24} md={12} lg={6} key={item.id}>
                            <Card
                                className="hover:shadow-indigo-100 m-5 transition duration-700 ease-in-out"
                                onMouseEnter={() => setHoveredCard(item.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <div className=""><img
                                    className=''
                                    alt="example"
                                    src={item.image}
                                /></div>
                                {isHovered && (
                                    <div className='flex absolute top-[40%] left-[38%] gap-3'>
                                        <SearchOutlined
                                            className='text-3xl'
                                            onClick={() => router.push("/add")}
                                        />
                                        <PlusCircleOutlined className='text-3xl' />
                                    </div>
                                )}
                                <div className="flex mt-5">
                                    <div>
                                        <p className="font-bold">{item.price}</p>
                                    </div>
                                    <div>
                                        <div className="flex ml-5">
                                            <div className="h-10 w-0.5 bg-gray-400"></div>
                                            <p className="ml-2">{item.tittle}</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    );
                })}
            </Row>


            <h1 className=" text-3xl bg-slate-300 sm:text-4xl md:text-6xl  lg:text-6xl font-bold text-center py-20   ">
                Why people choose Kidrella?
            </h1>


            <div className="bg-slate-300 pb-10  gap-x-10 lg:px-40 sm:px-10 md:px-16 px-5 grid  sm:grid-cols-1 md:grid-cols-3  lg:grid-cols-3 gap-10">
                <div className="">
                    <div className="flex ">
                        <div className="lg:text-end mr-5 ">
                            <h1 className="text-2xl font-bold mb-3">Preorder system
                            </h1>
                            <p className="">Donec fermentum vulputate nisl non sollicitudin.Vivamus sagittis fermentum dolor, porta adipiscing magna.
                                Retina ready
                            </p>
                        </div>
                        <svg className={`scale-x-[-1] ${screens['sm'] ? '' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" height="120" width="120" stroke-width="4" viewBox="0 0 32 32" id="tag"><path d="M14.71,1.29A1,1,0,0,0,14,1H2A1,1,0,0,0,1,2V14a1,1,0,0,0,.29.71l16,16a1,1,0,0,0,1.41,0l12-12a1,1,0,0,0,0-1.41ZM18,28.59l-15-15V3H13.59l15,15Z"></path><path d="M10,6a4,4,0,1,0,4,4A4,4,0,0,0,10,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,10,12Z"></path></svg>
                    </div>
                    <div className="flex mt-5">

                        <div className="lg:text-end mr-5">
                            <h1 className="text-2xl font-bold mb-3">Preorder system
                            </h1>
                            <p className="">Donec fermentum vulputate nisl non sollicitudin.Vivamus sagittis fermentum dolor, porta adipiscing magna.
                                Retina ready
                            </p>
                        </div>

                        <svg className={` ${screens['sm'] ? '' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" height="120" width="120" viewBox="0 0 52 52" id="diamond"><g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"><path d="M41.619 6.7H10.38L2 18.173 26 45.3l24-27.127z"></path><path d="M32.518 6.7H19.482l-3.497 11.473L26 45.3l10.015-27.127zM2 18.173h48"></path></g><g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><path d="M41.619 6.7H10.38L2 18.173 26 45.3l24-27.127z"></path><path d="M32.518 6.7H19.482l-3.497 11.473L26 45.3l10.015-27.127zM2 18.173h48"></path></g></svg>
                    </div>
                </div>
                <div className="bg-none">
                    <img src="https://c4.wallpaperflare.com/wallpaper/316/638/348/cute-teddy-bear-toy-lovely-brown-wallpaper-preview.jpg" alt="img" />
                </div>
                <div className="">
                    <div className="flex ">
                        <svg className={`w-32 h-32  text-gray-800 dark:text-white ${screens['sm'] ? '' : 'hidden'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" >
                            <path fill-rule="evenodd" d="M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4Zm12 12V5H7v11h10Zm-5 1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clip-rule="evenodd" />
                        </svg>
                        <div className="lg:ml-5">
                            <h1 className="text-2xl font-bold mb-3">Preorder system
                            </h1>
                            <p className="">Donec fermentum vulputate nisl non sollicitudin.Vivamus sagittis fermentum dolor, porta adipiscing magna.
                                Retina ready
                            </p>
                        </div>
                    </div>
                    <div className="flex ">
                        <svg className={`w-32 h-32  text-gray-800 dark:text-white ${screens['sm'] ? '' : 'hidden'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M5.005 10.19a1 1 0 0 1 1 1v.233l5.998 3.464L18 11.423v-.232a1 1 0 1 1 2 0V12a1 1 0 0 1-.5.866l-6.997 4.042a1 1 0 0 1-1 0l-6.998-4.042a1 1 0 0 1-.5-.866v-.81a1 1 0 0 1 1-1ZM5 15.15a1 1 0 0 1 1 1v.232l5.997 3.464 5.998-3.464v-.232a1 1 0 1 1 2 0v.81a1 1 0 0 1-.5.865l-6.998 4.042a1 1 0 0 1-1 0L4.5 17.824a1 1 0 0 1-.5-.866v-.81a1 1 0 0 1 1-1Z" clip-rule="evenodd" />
                            <path d="M12.503 2.134a1 1 0 0 0-1 0L4.501 6.17A1 1 0 0 0 4.5 7.902l7.002 4.047a1 1 0 0 0 1 0l6.998-4.04a1 1 0 0 0 0-1.732l-6.997-4.042Z" />
                        </svg>
                        <div className="lg:ml-5 ">
                            <h1 className="text-2xl font-bold my-3">Preorder system
                            </h1>
                            <p className="">Donec fermentum vulputate nisl non sollicitudin.Vivamus sagittis fermentum dolor, porta adipiscing magna.
                                Retina ready
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <h1 className=" text-3xl sm:text-4xl md:text-6xl  lg:text-6xl font-bold text-center my-10   ">
                    Our team
                </h1>
                <p className="text-center lg:mx-32 md:mx-10 sm:mx-10 mx-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora esse, inventore incidunt consequatur magni animi autem veniam neque laudantium quod, nihil illo unde nemo odio sint, itaque quidem ea suscipit.</p>
            </div>
            <div className=" grid justify-center sm:grid-cols-1 md:grid-cols-3  lg:grid-cols-3 gap-y-10 my-20 lg:mx-40 mx-1 sm:mx-5 md:mx-20 ">
                <div
                    className=""  >
                    <div className="flex justify-center"><img
                        alt="img"
                        src="https://themes.vsart.me/triablo/images/team/member1.jpg"
                    /></div>
                    <p className="text-2xl font-medium text-center mt-5">Tayler tong</p>
                    <p className="text-center">Manager</p>
                </div>
                <div
                    className="" >
                    <div className="flex justify-center"> <img
                        alt="img"
                        src="https://themes.vsart.me/triablo/images/team/member2.jpg"
                    />
                    </div>
                    <p className="text-2xl font-medium text-center mt-5">Joseph Abraham</p>
                    <p className="text-center"> Photographer</p>
                </div>
                <div
                    className=" " >
                    <div className="flex justify-center"><img
                        alt="img"
                        src="https://themes.vsart.me/triablo/images/team/member3.jpg"
                    />
                    </div>
                    <p className="text-2xl font-medium text-center mt-5">Aaron Beet</p>
                    <p className="text-center">Photographer</p>
                </div>
            </div>
            <div className="flex justify-between lg:px-40 md:px-10 sm:px-5 px-5 py-10 bg-gray-200 ">
                <div className="">Excited about what waiting for you? Check out our new summer collection.</div>
                <button type="button" className=" ext-black hover:text-red-500 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">CHECK IT OUT</button>
            </div>
            <div className=" bg-transparent  w-full   relative ">
                <div className="bg-black ">
                    <img className='-z-10 opacity-40   h-96 w-full' src="https://wallpaperaccess.com/full/4509437.jpg" alt="" />
                </div>
                <div className='absolute  top-[30%] left-[15%] '>
                    <div className="">
                        <div className='flex justify-center'>
                            <Avatar
                                size={100}
                                alt="img"
                                src="https://themes.vsart.me/triablo/images/team/member3.jpg"
                            />
                        </div>
                        <h1 className="text-center text-white text-xl mt-5">Lon Mckenzey, California</h1>

                        <h1 className=" text-center text-white lg:mx-48 md:mx-10 sm:mx-5 mx-5 font-medium text-xl  mt-10">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat neque min
                        </h1>
                    </div>

                </div>
            </div>
        </>

    );
}



export default HomePage