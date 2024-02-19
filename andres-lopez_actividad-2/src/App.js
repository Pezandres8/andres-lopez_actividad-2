import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <div className = 'main-container'>
        <h1>MY FAVORITE MOVIES ARE</h1>
        <Profile 
          movie = 'The Fight Club'
          director = 'David Fincher' 
          image = 'fight-club'
          country = 'United States'
          year = '1999'
          synopsis = 'An insomniac employee and a soap maker start an ilegal fight club that grows in something else.'
          trailer= 'https://www.youtube.com/watch?v=BdJKm16Co6M&ab_channel=20thCenturyStudios/'
          imbd= 'https://www.imdb.com/title/tt0137523/?ref_=fn_al_tt_1'
          letterboxd= 'https://letterboxd.com/film/fight-club/'
        />
        <Profile 
          movie = 'Mr.Nobody'
          director = 'Jaco Van Dormael' 
          image = 'mrnobody'
          country = 'Belgium'
          year = '2010'
          synopsis = 'A boy stands on a station platform as a train is about to leave. Should he go with his mother or stay with his father? Infinite possibilities arise from this decision. As long as he doesn not choose, anything is possible.'
          trailer= 'https://www.youtube.com/watch?v=vXf3gVYXlHg&ab_channel=RottenTomatoesComingSoon/'
          imbd= 'https://www.imdb.com/title/tt0485947/?ref_=fn_al_tt_1'
          letterboxd= 'https://letterboxd.com/film/mr-nobody/'
        />
        <Profile 
          movie = 'El colombian dream'
          director = 'Felipe Aljure' 
          image = 'universal'
          country = 'Colombia'
          year = '2005'
          synopsis = 'A psychedelic multiple-storyline around a disco called "El Colombian Dream".'
          trailer= 'https://www.youtube.com/watch?v=L8mv9hdUL-4&ab_channel=LizzethAcostaMelo'
          imbd= 'https://www.imdb.com/title/tt0485618/?ref_=fn_al_tt_1'
          letterboxd= 'https://letterboxd.com/film/el-colombian-dream/'
        />
      </div>
    </div>
  );
}

export default App;