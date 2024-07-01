import { Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CestaComponent } from './cesta/cesta.component';
import { ContatoComponent } from './contato/contato.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { EsquecisenhaComponent } from './esquecisenha/esquecisenha.component';
import { LoginComponent } from './login/login.component';
import { MeuCadastroComponent } from './meu-cadastro/meu-cadastro.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { SobremimComponent } from './sobremim/sobremim.component';
import { VitrineComponent } from './vitrine/vitrine.component';
export const routes: Routes = [
    {path:"cesta", component: CestaComponent},
    {path:"esquecisenha", component: EsquecisenhaComponent},
    {path:"pesquisa", component:PesquisaComponent},
    {path:"detalhe", component: DetalheComponent},
    {path:"meu-cadastro", component: MeuCadastroComponent},
    {path:"cadastro", component:CadastroComponent},
    {path:"vitrine", component:VitrineComponent},
    {path:"", component:VitrineComponent},
    {path:"login", component:LoginComponent},
    { path: 'detalhe/:codigo', component: DetalheComponent },
    {path:"contato", component:ContatoComponent},
    {path:"sobremim", component:SobremimComponent},
];
