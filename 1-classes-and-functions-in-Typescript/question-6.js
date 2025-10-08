// 6. Faça um programa TypeScript:
// 6.1 Crie duas classes que possuam uma interface em comum. Evite criar classes com nomes sem significado (class A, class X). Crie classes com nomes que representem algo significativo.
// 6.2 As classes devem possuir atributos diferentes. 
// 6.3 A interface deve possuir pelo menos um método. 
// 6.4 A implementação desse método nas classes deve utilizar os atributos.
// 6.5 Escreve um teste que instancie as classes criadas, altera os atributos e teste o método comum na interface.
var Farmaceutico = /** @class */ (function () {
    function Farmaceutico(curso_academico, descricao, area_do_conhecimento, atividade_laboral) {
        this.curso_academico = curso_academico;
        this.descricao = descricao;
        this.area_do_conhecimento = area_do_conhecimento;
        this.atividade_laboral = atividade_laboral;
    }
    // Implementação do método da interface
    Farmaceutico.prototype.exercerProfissao = function () {
        return "O farmac\u00EAutico, formado em ".concat(this.curso_academico, ", est\u00E1 ").concat(this.atividade_laboral, " na \u00E1rea de ").concat(this.area_do_conhecimento);
    };
    // Método específico da classe
    Farmaceutico.prototype.fazerMedicamento = function () {
        return "O farmac\u00EAutico est\u00E1 ".concat(this.atividade_laboral);
    };
    return Farmaceutico;
}());
var Historiador = /** @class */ (function () {
    function Historiador(curso_academico, descricao, area_do_conhecimento, atividade_laboral) {
        this.curso_academico = curso_academico;
        this.descricao = descricao;
        this.area_do_conhecimento = area_do_conhecimento;
        this.atividade_laboral = atividade_laboral;
    }
    // Implementação do método da interface
    Historiador.prototype.exercerProfissao = function () {
        return "O historiador, formado em ".concat(this.curso_academico, ", est\u00E1 ").concat(this.atividade_laboral, " na \u00E1rea de ").concat(this.area_do_conhecimento);
    };
    // Método específico da classe
    Historiador.prototype.fazerPesquisa = function () {
        return "O historiador est\u00E1 ".concat(this.atividade_laboral);
    };
    return Historiador;
}());
// 6.5 Teste que instancia as classes criadas, altera os atributos e testa o método comum na interface
function testarProfissionais() {
    console.log("=== TESTE DAS CLASSES FARMACEUTICO E HISTORIADOR ===\n");
    // Instanciar as classes
    console.log("1. Criando instâncias das classes:");
    var farmaceutico = new Farmaceutico("Farmácia", "Profissional da área de saúde", "Ciências da Saúde", "manipulando medicamentos");
    var historiador = new Historiador("História", "Profissional da área de humanas", "Ciências Humanas", "pesquisando documentos históricos");
    console.log("Farmacêutico criado:", farmaceutico.curso_academico);
    console.log("Historiador criado:", historiador.curso_academico);
    console.log();
    // Testar método comum da interface (antes da alteração)
    console.log("2. Testando método comum da interface (exercerProfissao):");
    console.log("Farmacêutico:", farmaceutico.exercerProfissao());
    console.log("Historiador:", historiador.exercerProfissao());
    console.log();
    // Alterar atributos
    console.log("3. Alterando atributos:");
    farmaceutico.atividade_laboral = "desenvolvendo novos medicamentos";
    farmaceutico.area_do_conhecimento = "Farmacologia";
    historiador.atividade_laboral = "lecionando em universidade";
    historiador.area_do_conhecimento = "História Medieval";
    console.log("Atributos do farmacêutico alterados:");
    console.log("- Nova atividade:", farmaceutico.atividade_laboral);
    console.log("- Nova área:", farmaceutico.area_do_conhecimento);
    console.log("Atributos do historiador alterados:");
    console.log("- Nova atividade:", historiador.atividade_laboral);
    console.log("- Nova área:", historiador.area_do_conhecimento);
    console.log();
    // Testar método comum da interface (após alteração)
    console.log("4. Testando método comum da interface (após alterações):");
    console.log("Farmacêutico:", farmaceutico.exercerProfissao());
    console.log("Historiador:", historiador.exercerProfissao());
    console.log();
    // Testar métodos específicos de cada classe
    console.log("5. Testando métodos específicos de cada classe:");
    console.log("Método específico do farmacêutico:", farmaceutico.fazerMedicamento());
    console.log("Método específico do historiador:", historiador.fazerPesquisa());
    console.log();
    // Demonstrar polimorfismo usando a interface
    console.log("6. Demonstrando polimorfismo com a interface:");
    var profissionais = [farmaceutico, historiador];
    profissionais.forEach(function (profissional, index) {
        console.log("Profissional ".concat(index + 1, ": ").concat(profissional.exercerProfissao()));
    });
    console.log("\n=== TESTE CONCLUÍDO COM SUCESSO ===");
}
// Executar o teste
testarProfissionais();
