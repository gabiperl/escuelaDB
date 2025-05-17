import { Routes } from '@angular/router';
import { ListDPTComponent } from './list-dpt/list-dpt.component';
import { ListMembersComponent } from './list-members/list-members.component';
import { AddDPTComponent } from './add-dpt/add-dpt.component';
import { AddMemberComponent } from './add-member/add-member.component';

export const routes: Routes = [
    { path: 'dpt', component: ListDPTComponent},
    { path: 'members', component: ListMembersComponent},
    { path: 'addDpt', component: AddDPTComponent},
    { path: 'addMember', component: AddMemberComponent},
    { path: '**', redirectTo: 'dpt', pathMatch: 'full' },
    { path: '', redirectTo: 'dpt', pathMatch: 'full' }
];
