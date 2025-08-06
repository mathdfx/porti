import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(API_KEY);

function VariablesModule() {
    const [userInput, setUserInput] = useState(''); //O estado para armazenar a entrada do usuário
    const [generatedCode, setGeneratedCode] = useState(''); // Amazenar o codigo da Ia
    const [isLoading, setIsLoading] = useState(false); // Estado para controlar o carregamento  

    const headleGenerateCode = async () => {
        setIsLoading(true); // Inicia o carregamento
        setGeneratedCode(''); // Limpa o código gerado
        try {
            //Acessa o Germini Pro
            const model = genAI.getGenerativeModel({model: 'germini-pro'});

            //Prompt para dar instruções à IA
            const prompt = `Você é um tutor de programação Python. Sua tarefa é criar APENAS o código Python para o seguinte pedido, sem explicações adicionais, sem usar markdown (sem \`\`\`python). Pedido do usuário: "${userInput}"`;

            //Gera o código com base no prompt
            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text()

            // Atualiza o estado com o código gerado por IA
            setGeneratedCode(text);

        } catch (error) {
            console.error("Erro ao gerar o código:", error);
            setGeneratedCode("Desculpe, ocorreu um erro ao contatar a IA");
        } finally {
            setIsLoading(false); // Finaliza o carregamento Independente do resultado
        }
    };
    return (
        <section>
            <h2>Modulo 1: Variáveis e Tipos de Dados </h2>
            <p>Variaveis são como "caixas" na memória de computador onde guardamos informações. Cada informação tem um tipo de texto (string), numero (number), etc. </p>

            <h3>Peça para a IA</h3>
            <p>Descreva em poucas palavras uma varável que você quer criar, e a IA vai gerar o codígo para você.</p>

        <textarea
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Ex: uma variável para guardar o nome de um herói"
        rows="3"
        style={{ width: '100%', padding: '8px' }}
        />

        <br />
        <button onClick={headleGenerateCode} disabled={isLoading}>
            {isLoading ? 'Gerando...' : 'Gerar Código JavaScript'}
        </button>

        {/* Exibe o código gerado pela IA */}
        {generatedCode && (
            <div stle={{ marginTop: '20px', backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px' }}>
                <h4>Código Gerado:</h4>
                <pre><code>{generatedCode}</code></pre>
                </div>
            )}    
        </section>
        
    );
}