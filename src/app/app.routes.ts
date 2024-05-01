import { Routes } from '@angular/router';
import { CestaComponent } from './cesta/cesta.component';
import { EsquecisenhaComponent } from './esquecisenha/esquecisenha.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { VitrineComponent } from './vitrine/vitrine.component';
import { LoginComponent } from './login/login.component';
import { ContatoComponent } from './contato/contato.component';
import { SobremimComponent } from './sobremim/sobremim.component';
export const routes: Routes = [
    {path:"cesta", component: CestaComponent},
    {path:"esquecisenha", component: EsquecisenhaComponent},
    {path:"pesquisa", component:PesquisaComponent},
    {path:"detalhe", component: DetalheComponent},
    {path:"cadastro", component:CadastroComponent},
    {path:"vitrine", component:VitrineComponent},
    {path:"", component:VitrineComponent},
    {path:"login", component:LoginComponent},
    { path: 'detalhe/:codigo', component: DetalheComponent },
    {path:"contato", component:ContatoComponent},
    {path:"sobremim", component:SobremimComponent},
];
