import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
    return (<>
        <div className="w-full bg-slate-50 border-t-[1px] border-slate-300 pt-8 pb-10 px-12 mt-16">
            <h2 className="text-bold text-lg pt-2 pb-8">Shop your way at Coles</h2>
            <div id="footer-text">
                <div>
                    <h4>Customer help</h4>
                    <p>Contact us</p>
                    <p>Help Centre</p>
                    <p>Staying safe online</p>
                    <p>Product recalls</p>
                    <p>Accessibility</p>
                </div>
                <div>
                    <h4>Useful links</h4>
                    <p>Stores near you</p>
                    <p>Browse Products</p>
                    <p>Coles magazines</p>
                    <p>Gift cards</p>
                    <p>Coles Radio</p>
                    <p>Coles Plus</p>
                    <p>Competition winners</p>
                </div>
                <div>
                    <h4>About Coles</h4>
                    <p>Introducing us</p>
                    <p>Our brands</p>
                    <p>Careers</p>
                    <p>Our history</p>
                    <p>Sustainability at Coles</p>
                    <p>Media releases</p>
                    <p>Investor information</p>
                    <p>How Flybuys works</p>
                </div>
                <div className="pr-4">
                    <h4>Follow Us</h4>
                    <div className="py-4 flex gap-2">
                        <button className="border-[1px] border-black w-14 h-14 rounded-full hover:bg-slate-200 flex justify-center items-center">
                            <FaFacebookF />
                        </button>
                        <button className="border-[1px] border-black w-14 h-14 rounded-full hover:bg-slate-200 flex justify-center items-center">
                            <AiFillInstagram />
                        </button>
                        <button className="border-[1px] border-black w-14 h-14 rounded-full hover:bg-slate-200 flex justify-center items-center">
                            <FaLinkedinIn />
                        </button>
                        <button className="border-[1px] border-black w-14 h-14 rounded-full hover:bg-slate-200 flex justify-center items-center">
                            <FaYoutube />
                        </button>
                    </div>

                    <h4 className="pt-4">Download the Coles app</h4>
                    <div className="py-4">
                        <button className="border-[1px] border-black w-28 h-14 rounded-lg hover:bg-slate-200">
                            <span>Coles</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Footer