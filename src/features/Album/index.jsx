import React from 'react';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Nhạc hoa Thịnh hành',
            thumbnailUrl: 'https://photo-playlist-zmp3.zadn.vn/s1/v3/radio?src=HavwqN7EYmrDGr6VBegSG044G8DtYy440GHOWZcAb51N0mdMFzoVLG841u5ftvXI20K1spNMdGzSOWABFRkT2bTZ08CWujvKMoLIY6kWbsTHBbUZRRVRAHO_6kygffi-N2uQkogXcseGVr7iUABCR4Ty0Uvxyvfk5teCxNwabsmVBG_lSFIKSKDlNUCsffyw0IPk-36gg3nAUoJlVERlBGeyRgXyu-zv2Zbq_JAnl7uFQ2B-O-6-V5yxTFmsukfxNZ5tyZxgxdO6BogsEEQe91LeVk1kkV8JNv7ypM5Q1WzPs8Zinf864VPPu40K8I2NR-QiKqzzPy4wCdq&cv=1&size=thumb/240_240'
        },
        {
            id: 2,
            name: 'Rap Việt nghe là nghiền',
            thumbnailUrl: 'https://photo-playlist-zmp3.zadn.vn/v3/radio?src=HavwqN7EYmrDGr6VBegUMHOLKPiyqPm4NHLKcsBHcHDTN0F2PzFEImfRMSjZXi0OM5bVcp7JaauA05tBCjhT4HjMKOrWqPPJKcLRXcNwa4GUAnoNABRNLLvkLj8euDS4NZXEqM7YsLW9EK_TDh65NLPk7Deyu8PON3uUZJBXqbnO91QSPksK3bDlLDLLzfC2P6aVY1_XtauZU5_9LQlUIoDvNyn2eCX88YzKd1cdo1GbUmN0JwdD4N9nLPGRhveJSt1IZK3hcnyr8a7A5BtDG6yLe4GMEfuLz4XJXVjbJVC3u8HXTYbUg5-dqY8oVG&cv=1&size=thumb/240_240'
        },
        {
            id: 3,
            name: 'Trào lưu nhạc Hot',
            thumbnailUrl: 'https://photo-playlist-zmp3.zadn.vn/s2/v3/radio?src=HavwqN7EYmrDGr6VBegUMHOLKPiyqPa4KnLHWc_6omPLJm20DPAU1LeV0uCnniu7KHW4rJYHcWHN6sk5Ey7s05GSRO4wsQb1110hqp6IwmWt6Y3M6fJyH7bTCPjMq-q4FHTqcrVJkGGy3oJN0u2-L6vPA8TJqxC5FLegW5s4j5DcN2tINOQpMoe7ROnHmE5GOKKalqh7xMTd3ddrNOgX87PERByTYlGWS4uveX-HfoSZ7ZdsJi2ZSovAQV0Mn_1sVHrke13EzoWhGNVo0itxRdbICAPKcwGqLBEWyIqKpU5KgmimBHJDzLJNB1PP7CVB8BG1lSa-Zpoe_0EWqsFKOE-gGE9z&cv=1&size=thumb/240_240'
        },

    ];


    return (
        <div>
            <h2>Có thể bạn sẽ thích đấy</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;