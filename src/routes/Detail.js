import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from './Detail.module.css';

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState(null);
    
    useEffect(() => {
        const getMovie = async () => {
            try {
                const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
                const json = await response.json();
                setMovie(json.data.movie);
            } catch (error) {
                console.error("영화 상세 정보를 가져오는데 실패했습니다:", error);
            } finally {
                setLoading(false);
            }
        };
        getMovie();
    }, [id]);
    
    if (loading) {
        return <h1 className={styles.loading}>로딩 중...</h1>;
    }
    
    if (!movie) {
        return <h1 className={styles.loading}>영화를 찾을 수 없습니다</h1>;
    }
    
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{movie.title}</h1>
            <img className={styles.image} src={movie.medium_cover_image} alt={movie.title} />
            <div className={styles.info}>
                <p>개봉 연도: {movie.year}</p>
                <p>평점: {movie.rating}</p>
                <p>상영 시간: {movie.runtime}분</p>
            </div>
            <p className={styles.description}>{movie.description_full}</p>
        </div>
    );
}

export default Detail;