import { Component } from '@angular/core';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-movie-alert',
  imports: [],
  templateUrl: './movie-alert.html',
  styleUrl: './movie-alert.scss',
})
export class MovieAlert {
  movieAlert() {
    Swal.fire({
      text: 'Search for a movie. e.g. "Herry Poter".',
      input: 'text',
      confirmButtonText: 'Search!',
      confirmButtonColor: 'var(--theme-deafult)',
    })
      .then(name => {
        if (!name) throw null;
        return fetch(`https://itunes.apple.com/search?term=${name.value}&entity=movie`);
      })
      .then(results => {
        return results.json();
      })
      .then(json => {
        const movie = json.results[0];
        const name = movie.trackName;
        const imageURL = movie.artworkUrl100;

        Swal.fire({
          title: 'Top result:',
          text: name,
          imageUrl: imageURL,
          confirmButtonColor: 'var(--theme-deafult)',
        });
      })
      .catch(err => {
        if (err) {
          Swal.fire('Oh noes!', 'The AJAX request failed!', 'error');
        } else {
          Swal.close();
        }
      });
  }
}
