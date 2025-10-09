// 6. Faça um programa TypeScript:
// 6.1 Crie duas classes que possuam uma interface em comum. Evite criar classes com nomes sem significado (class A, class X). Crie classes com nomes que representem algo significativo.
// 6.2 As classes devem possuir atributos diferentes. 
// 6.3 A interface deve possuir pelo menos um método. 
// 6.4 A implementação desse método nas classes deve utilizar os atributos.
// 6.5 Escreve um teste que instancie as classes criadas, altera os atributos e teste o método comum na interface.

interface Profissional{
    curso_academico: string;
    descricao: string;
    area_do_conhecimento: string;
    atividade_laboral: string;
    
    // Método comum que deve ser implementado por todas as classes
    exercerProfissao(): string;
}

class Farmaceutico implements Profissional{
    curso_academico!: string;
    descricao!: string;
    area_do_conhecimento!: string;
    atividade_laboral!: string;

    constructor(curso_academico: string, descricao: string, area_do_conhecimento: string, atividade_laboral:string) {
        this.curso_academico = curso_academico;
        this.descricao = descricao;
        this.area_do_conhecimento = area_do_conhecimento;
        this.atividade_laboral = atividade_laboral;
        
    }

    // Implementação do método da interface
    exercerProfissao(): string {
        return `O farmacêutico, formado em ${this.curso_academico}, está ${this.atividade_laboral} na área de ${this.area_do_conhecimento}`;
    }

    // Método específico da classe
    fazerMedicamento(): string {
        return `O farmacêutico está ${this.atividade_laboral}`;
    }

}

class Historiador implements Profissional{
    curso_academico!: string;
    descricao!: string;
    area_do_conhecimento!: string;
    atividade_laboral!: string;

    constructor(curso_academico: string, descricao: string, area_do_conhecimento: string, atividade_laboral:string) {
        this.curso_academico = curso_academico;
        this.descricao = descricao;
        this.area_do_conhecimento = area_do_conhecimento;
        this.atividade_laboral = atividade_laboral;
        
    }

    // Implementação do método da interface
    exercerProfissao(): string {
        return `O historiador, formado em ${this.curso_academico}, está ${this.atividade_laboral} na área de ${this.area_do_conhecimento}`;
    }

    // Método específico da classe
    fazerPesquisa(): string {
        return `O historiador está ${this.atividade_laboral}`;
    }

}

// 6.5 Teste que instancia as classes criadas, altera os atributos e testa o método comum na interface
function testarProfissionais(): void {
    console.log("=== TESTE DAS CLASSES FARMACEUTICO E HISTORIADOR ===\n");
    
    // Instanciar as classes
    console.log("1. Criando instâncias das classes:");
    let farmaceutico = new Farmaceutico(
        "Farmácia", 
        "Profissional da área de saúde", 
        "Ciências da Saúde", 
        "manipulando medicamentos"
    );
    
    let historiador = new Historiador(
        "História", 
        "Profissional da área de humanas", 
        "Ciências Humanas", 
        "pesquisando documentos históricos"
    );
    
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
    let profissionais: Profissional[] = [farmaceutico, historiador];
    
    profissionais.forEach((profissional, index) => {
        console.log(`Profissional ${index + 1}: ${profissional.exercerProfissao()}`);
    });
    
    console.log("\n=== TESTE CONCLUÍDO COM SUCESSO ===");
}

// Executar o teste
testarProfissionais();
