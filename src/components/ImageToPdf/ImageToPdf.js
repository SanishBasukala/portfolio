import React, { useRef } from 'react';
import { FaDownload } from 'react-icons/fa';
import image from '../../asssets/images/SanishBasukala.png'
import './ImageToPdf.css'

const ImageToPdf = () => {
    const handleGeneratePdf = async () => {
        const html2pdf = await require('html2pdf.js') /* Inline import */

        var pageElement = document.getElementById('page');
        var overlay = document.getElementsByClassName('overlay')[0];
        pageElement.querySelector("img").style.display = "block";
        overlay.style.display = "block";
        
        var opt ={
            margin: 20,
            filename: 'SanishBasukalaResume.pdf'
        }
        html2pdf().from(pageElement).set(opt).save();
        setTimeout(function () {
            pageElement.querySelector("img").style.display = "none";
            overlay.style.display = "none";
        }, 1);
    };

    return (
        <div className='ml-auto'>
            <div className='overlay'>
                Loading...
            </div>
            <div id='page'>
                <img src={image} style={{ display: 'none' }}></img>
            </div>
            <button onClick={handleGeneratePdf} className='downloadBtn flex gap-2 items-center w-36'>
                <div>
                    <FaDownload className='icon'/>
                </div>
                <span>Get my resume</span>
            </button>
        </div>
    );
};

export default ImageToPdf;
