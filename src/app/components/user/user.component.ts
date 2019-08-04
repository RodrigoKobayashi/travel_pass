import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { Router } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  formGroup: FormGroup;
  formGroupConvidadosAdultos: FormGroup;
  formGroupConvidadosCriancas: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(
    private fb: FormBuilder,
    private route: Router
  ) {
    this.createForm();
    this.createFormConvidadosAdultos();
    this.createFormConvidadosCriancas();
  }

  ngOnInit() {
  }

  createForm() {
    this.formGroup = this.fb.group({
      nome: [null],
      endereco: [null],
      numero: [null],
      cidade: [null],
      bairro: [null],
      telefone: [null],
      email: [null, Validators.email]
    });
  }

  createFormConvidadosAdultos() {
    this.formGroupConvidadosAdultos = this.fb.group({
      nomeAdulto1: [null],
      docAdulto1: [null],
      nomeAdulto2: [null],
      docAdulto2: [null],
      nomeAdulto3: [null],
      docAdulto3: [null],
      nomeAdulto4: [null],
      docAdulto4: [null]
    });
  }

  createFormConvidadosCriancas() {
    this.formGroupConvidadosCriancas = this.fb.group({
      nomeCrianca1: [null],
      docCrianca1: [null],
      nomeCrianca2: [null],
      docCrianca2: [null],
      nomeCrianca3: [null],
      docCrianca3: [null],
      nomeCrianca4: [null],
      docCrianca4: [null],
    });
  }

  homePage() {
    this.route.navigate(['/']);
  }

  save() {

  }
}
