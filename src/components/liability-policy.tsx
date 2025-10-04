const LiabilityPolicy = () => {
    return (
        <div>
            <section className="max-w-4xl mx-auto px-6 py-12 mt-10">
                <h1 className="text-4xl font-bold text-center mb-10">Termo de responsabilidade</h1>
                <p className="text-sm mb-6">Última atualização: 17/05/2025</p>
                <p className="mb-6">
                    Ao utilizar a Zypeer Edu, você declara que leu, compreendeu e aceitou integralmente todos os termos e
                    condições estabelecidos neste Termo de Responsabilidade,
                    comprometendo-se a cumpri-los durante o uso dos serviços e funcionalidades disponibilizados pela plataforma/aplicativo Zypeer Edu.
                </p>
                <p className="mb-6">
                    Ficamos à disposição para esclarecer suas dúvidas, receber feedbacks ou reclamações através do seguinte e-mail:
                    <a className="text-blue-600 hover:underline" href="malito:suporte@zypeer"> suporte@zypeer.com.br</a>.
                </p>
                <div className="space-y-8">
                    <div>
                        <h2 className="text-2xl text-center  mt-10 mb-10 font-semibold uppercase">1. Uso da Plataforma</h2>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Utilizar o app da Zypeer de forma ética, respeitosa e dentro dos limites legais;</li>
                            <li>Não utilizar a plataforma para práticas ilegais, ofensivas, discriminatórias ou que violem direitos de terceiros;</li>
                            <li>Fornecer informações verídicas e mantê-las atualizadas no sistema.</li>

                        </ul>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl uppercase text-center mt-10 mb-10 font-semibold ">2. Segurança de Acesso</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>O Usuário é responsável por manter a confidencialidade de sua conta e senha, assumindo total responsabilidade por atividades realizadas com seu login;</li>
                        <li>Em caso de suspeita de uso indevido por terceiros, o Usuário deverá comunicar imediatamente a equipe da Zypeer.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl uppercase  text-center mt-10 mb-10 font-semibold">3. Conteúdo e Dados</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>O Usuário é o único responsável por qualquer conteúdo postado ou compartilhado dentro da plataforma;</li>
                        <li>A Zypeer reserva-se o direito de remover conteúdos que violem este termo, a seu critério, sem aviso prévio.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl uppercase text-center mt-10 mb-10 font-semibold">4. Privacidade e Proteção de Dados</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>
                            Os dados coletados serão tratados conforme a Política de Privacidade da Zypeer, em conformidade com a LGPD (Lei Geral de Proteção de Dados);
                        </li>
                        <li>
                            O Usuário autoriza o uso dos dados fornecidos para fins de funcionamento do aplicativo e aprimoramento da experiência na plataforma.
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl uppercase text-center mt-10 mb-10 font-semibold">5. Sanções</h2>
                    <p>O descumprimento das regras previstas neste Termo poderá resultar em:</p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Advertência;</li>
                        <li>Suspensão ou exclusão da conta;</li>
                        <li>Adoção de medidas legais cabíveis, conforme a gravidade da infração.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl uppercase text-center mt-10 mb-10 font-semibold">6. Aceitação</h2>
                    <p>Ao utilizar o aplicativo da Zypeer, o Usuário declara ter lido e concordado com este Termo de Responsabilidade.</p>
                </div>
                <p className="mt-8 font-semibold">
                    Dúvidas? Fale com a gente em: <a href="mailto:suporte@zypeer.com" className="text-blue-600 hover:underline">suporte@zypeer.com</a>
                </p>
            </section>
        </div>
    )
}

export default LiabilityPolicy;