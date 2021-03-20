import React from 'react';
import styled from 'styled-components';
import img from './death_hollows.png';

const SwipeItem = React.memo(({onSwipe}) => {

    const swipe_div = React.useRef(null);
    let swipe_status = 'ready';
    let target_classname = '';
    let coordinate = {
        start_x: 0,
        start_y: 0,
        end_x: 0,
        end_y: 0
    };
    React.useEffect(() => {
        const reset = () => {
            swipe_status = 'ready';
            coordinate = {start_x: 0,
                start_y: 0,
                end_x: 0,
                end_y: 0}
            swipe_div.current.className = target_classname;
            swipe_div.current.style.left = 0 + 'px';
            swipe_div.current.style.top = 0 + 'px';
        };

        const touchStart = (e) => {
            swipe_status = 'touchstart';
            target_classname = swipe_div.current.className;
            coordinate = {
                ...coordinate,
                start_x: e.touches[0].clientX,
                start_y: e.touches[0].clientY
            }
        };

        const touchEnd = (e) => {
            swipe_status = 'touchend';

            coordinate = {
                ...coordinate,
                end_x: e.changedTouches[0].clientX,
                end_y: e.changedTouches[0].clientY
            };

            let diff_x = coordinate.end_x - coordinate.start_x;
            let direct = 'left';

            if(Math.abs(diff_x) > 50) {
                swipe_div.current.className = target_classname + ' swipe';
            }

            if(diff_x > 0) {
                direct = 'right';
                swipe_div.current.style.left = diff_x + 150 + 'px';
                swipe_div.current.style.opacity = 0
            } else {
                direct = 'left';
                swipe_div.current.style.left = diff_x + 150 + 'px';
                swipe_div.current.style.opacity = 0
            }

            window.setTimeout(() => {
                window.setTimeout(() => {
                    reset();
                    onSwipe(direct);
                }, 300);
            });

        };

        const touchMove = (e) => {
            e.preventDefault();

            let current_coordinate = {
                x: e.touches[0].clientX,
                y: e.touches[0].clientY
            }

            swipe_div.current.style.left = current_coordinate.x - coordinate.start_x + 'px';
            swipe_div.current.style.top = current_coordinate.y - coordinate.start_y + 'px';
        };

        const touchCancel = (e) => {

        };

        swipe_div.current.addEventListener("touchstart", touchStart);
        swipe_div.current.addEventListener("touchmove", touchMove);
        swipe_div.current.addEventListener("touchend", touchEnd);
        swipe_div.current.addEventListener("touchcancel", touchCancel);

        return () => {
            if(!swipe_div.current){
                return;
            }
            swipe_div.current.removeEventListener("touchstart", touchStart);
            swipe_div.current.removeEventListener("touchmove", touchMove);
            swipe_div.current.removeEventListener("touchend", touchEnd);
            swipe_div.current.removeEventListener("touchcancel", touchCancel);
        };
    }, []);
    return (
        <DragItem ref={swipe_div}>
                <ImgSize>
                    <img src={img} />
                </ImgSize>
        </DragItem>
    );
});

SwipeItem.defaultProps = {
    onSwipe: () => { },
}

const DragItem = styled.div`
    position:fixed;
    top:0;
    left:0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items:center;
    justify-content:center;
    z-index:1;
    &.swipe {
        transition:300ms;
    }
`;

const ImgSize = styled.div`
    img {
        width: 120px;
        height: 200px;
    }
`;
export default SwipeItem;