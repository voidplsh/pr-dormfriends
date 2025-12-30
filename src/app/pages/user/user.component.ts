import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { User, findUserByUsername } from '../../data/users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  user: User | null = null;

  ngOnInit(): void {
    let username = this.route.snapshot.paramMap.get('username');
    if (username) {
      // Remove the ~ prefix if present
      if (username.startsWith('~')) {
        username = username.substring(1);
      }

      const foundUser = findUserByUsername(username);
      if (foundUser) {
        this.user = foundUser;
      } else {
        // Redirect to 404 page (during prerender, this will be a static page)
        this.router.navigateByUrl('/404', { skipLocationChange: true });
      }
    }
  }
}
