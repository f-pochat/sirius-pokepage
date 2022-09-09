import React, {useState} from 'react';
import './Table.css'
import InfiniteScroll from "react-infinite-scroll-component";
import {useNavigate} from 'react-router-dom';
import {useGetDemoPokemons} from "../../../../hooks/useGetDemoPokemons";

const Table = () => {

    const [hoverOnId, setHoverOnId] = useState<number>(-1);
    const navigate = useNavigate();
    const {data, isLoading, fetchMore, offset} = useGetDemoPokemons();

    return (
        <div className='table-container'>
            {
                (isLoading && data) ?
                    <div className="poke-spinner"/>
                    :
                    <InfiniteScroll
                        className='scroll-container'
                        dataLength={offset}
                        hasMore={1134 > offset}
                        loader={<div className="poke-spinner"/>}
                        next={fetchMore}
                    >
                        {
                            data.map((item,i) => {
                                if (i % 4 === 0 || i % 7 === 0) return(
                                    <div className="cell lg-cell" key={item.name} onClick={() => navigate('/'+item.id)}>
                                        <img
                                            src={hoverOnId === item.id ? item.animated : item.frontImage}
                                            alt={item.name}
                                            onMouseEnter={() => setHoverOnId(item.id)}
                                            onMouseLeave={() => setHoverOnId(-1)}
                                        />
                                        <h1>{item.name[0].toUpperCase() + item.name.substring(1)}</h1>
                                    </div>
                                )
                                return(
                                    <div className="cell sm-cell" key={item.name} onClick={() => navigate('/'+item.id)}>
                                        <img
                                            src={hoverOnId === item.id ? item.animated : item.frontImage}
                                            alt={item.name}
                                            onMouseEnter={() => setHoverOnId(item.id)}
                                            onMouseLeave={() => setHoverOnId(-1)}
                                        />
                                        <h1>{item.name[0].toUpperCase() + item.name.substring(1)}</h1>
                                    </div>
                                )
                            })
                        }
                    </InfiniteScroll>
            }
        </div>
    );
};

export default Table;