import React from 'react';

function FooterHome(props) {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-item">
                    <p >liên hệ <b style={{color:"#fff"}}>ig @d_ducccc</b></p>
                    <p>@2021-make by @ducduong</p>
                </div>
                <div className="footer-item">
                    <p className="footer-follow">theo dõi</p>
                    <ul className="follow-socia">
                        <li id="fb" >fb</li>
                        <li id="ig" >ig</li>
                        <li id="tw" >tw</li>
                        <li id="yt" >yt</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default FooterHome;