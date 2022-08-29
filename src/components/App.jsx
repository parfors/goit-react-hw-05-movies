import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ParagraphTitleStyled } from 'pages';

const Layout = lazy(() => import('pages/Layout'));
const TrendingMovies = lazy(() => import('pages/TrendingMovies'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Cast = lazy(() => import('pages/Cast'));
const Reviews = lazy(() => import('pages/Reviews'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

// import Layout from 'pages/Layout';
// import TrendingMovies from 'pages/TrendingMovies';
// import Movies from 'pages/Movies';
// import MovieDetails from 'pages/MovieDetails';
// import  from 'pages/Cast';
// import  from 'pages/Reviews';
// import NotFoundPage from 'pages/NotFoundPage';

export const App = () => {
  return (
    <Suspense
      fallback={<ParagraphTitleStyled>Loading...</ParagraphTitleStyled>}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TrendingMovies />} />
          <Route path="movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};
