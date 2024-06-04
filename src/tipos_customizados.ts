type aluno = {
    nome: string;
    cursos?: string[];
    idade: number;
}

const alunos: aluno[] = [
    {
        nome: 'Rodrigo',
        cursos: ['Angular', 'React'],
        idade: 35,
    },
    {
        nome: 'Maria',
        cursos: ['Angular', 'React', 'Vue'],
        idade: 25,
    },
    {
        nome: 'João',
        cursos: ['Angular', 'React', 'Vue', 'Node'],
        idade: 30,
    },
];

alunos.push({
    nome: 'José',
    cursos: ['Angular', 'React', 'Vue', 'Node', 'Python'],
    idade: 40,
});

const novoAluno: aluno = {
    nome: 'Lucas',
    idade: 22,
};

function exibeAluno(aluno: aluno) {
    console.log(aluno.nome);
}