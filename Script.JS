<script>
    function calcularMedia() {
        // Obter os valores dos campos de entrada e converter para número
        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        const num3 = parseFloat(document.getElementById('num3').value);
        const num4 = parseFloat(document.getElementById('num4').value);

        // Verificar se todos os valores são números válidos
        if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {
            alert('Por favor, preencha todos os campos com números válidos.');
            return;
        }

        // Calcular a média
        const media = (num1 + num2 + num3 + num4) / 4;

        // Exibir o resultado na página
        document.getElementById('resultado').innerText = `A média é: ${media.toFixed(2)}`;
    }
</script>
