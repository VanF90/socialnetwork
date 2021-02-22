import React from 'react';

import s from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
    return (
        <div>
            <div >
                <img
                    src="https://c4.wallpaperflare.com/wallpaper/631/790/379/red-tulip-field-at-daytime-dutch-dutch-wallpaper-preview.jpg"></img>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>

        </div>
    )
}

export default ProfileInfo;