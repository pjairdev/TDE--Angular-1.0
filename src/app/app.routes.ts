import { Routes } from '@angular/router';

import { EventoListComponent } from './evento-list/evento-list.component';
import { MinicursoListComponent } from './minicurso-list/minicurso-list.component';
import { PalestrasListComponent } from './palestras-list/palestras-list.component';
import { LoginComponent } from './login/login.component';
import { CriarEventoComponent } from './criar-evento//criar-evento.component';
import { RemoverEventoComponent } from './&remover-evento/remover-evento.component';
import { EditarEventoComponent } from './editar-evento/editar-evento.component';
import { MinicursoCriarComponent } from './minicurso-criar/minicurso-criar.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioRegisterComponent } from './usuario-register/usuario-register.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { PalestraCriarComponent } from './palestra-criar/palestra-criar.component';
import { PalestraEditarComponent } from './palestra-editar/palestra-editar.component';
import { PalestraRemoverComponent } from './palestra-remover/palestra-remover.component';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';
import { InscricaoEventoListarComponent } from './inscricao-evento-listar/inscricao-evento-listar.component';
import { InscricaoEventoCriarComponent } from './inscricao-evento-criar/inscricao-evento-criar.component';
import { InscricaoMinicursoCriarComponent } from './inscricao-minicurso-criar/inscricao-minicurso-criar.component';
import { InscricaoMinicursoListarComponent } from './inscricao-minicurso-listar/inscricao-minicurso-listar.component';
import { InscricaoPalestraCriarComponent } from './inscricao-palestra-criar/inscricao-palestra-criar.component';
import { InscricaoPalestraListComponent } from './inscricao-palestra-list/inscricao-palestra-list.component';


export const routes: Routes = [    
    {path: '', component: BemVindoComponent},

    
    {path: 'inscricao/evento', component: InscricaoEventoCriarComponent},
    {path: 'inscricao/evento/list', component: InscricaoEventoListarComponent},
    {path: 'inscricao/minicurso', component: InscricaoMinicursoCriarComponent},
    {path: 'inscricao/minicurso/list', component: InscricaoMinicursoListarComponent},
    {path: 'inscricao/palestra', component: InscricaoPalestraCriarComponent},
    {path: 'inscricao/palestra/list', component: InscricaoPalestraListComponent},

    {path: 'minicurso', component: MinicursoListComponent},
    {path: 'minicurso/criar', component: MinicursoCriarComponent},
    {path: 'minicurso/list', component: MinicursoListComponent},

    {path: 'palestras/list', component: PalestrasListComponent},
    {path: 'palestras/criar', component: PalestraCriarComponent},
    {path: 'palestras/editar', component: PalestraEditarComponent},
    {path: 'palestras/remover', component: PalestraRemoverComponent},

    {path: 'usuario/logar', component: LoginComponent},
    {path: 'usuario/list', component: UsuarioListComponent},
    {path: 'usuario/editar', component: UsuarioComponent},
    {path: 'usuario/register', component: UsuarioRegisterComponent},

    {path: 'evento/criar', component: CriarEventoComponent},
    {path: 'evento/list', component: EventoListComponent},

    {path: 'usuario/remover-evento', component: RemoverEventoComponent},
    {path: 'usuario/editar-evento', component: EditarEventoComponent},

];