document.addEventListener("DOMContentLoaded", function () {
                const tickerStream = document.getElementById("ticker-stream");
                if (!tickerStream) return;

                
                fetch("https://v6.exchangerate-api.com/v6/bb52d5737ed0d6083e71d521/latest/EUR")
                    .then(response => {
                        if (!response.ok) throw new Error("Проблем с API връзката");
                        return response.json();
                    })
                    .then(data => {
                        
                        const rates = data.conversion_rates;
                        
                        
                        const usd = rates.USD.toFixed(4);    
                        const tryRate = rates.TRY.toFixed(4); 
                        const gbp = rates.GBP.toFixed(4);    
                        const eur = "1.0000";                

                        
                        const content = `
                            <span>EUR/USD ${usd}</span>
                            <span>EUR/TRY ${tryRate}</span>
                            <span>EUR/GBP ${gbp}</span>
                            <span>EUR/EUR ${eur}</span>
                        `;
                        
                        
                        tickerStream.innerHTML = content + content;
                    })
                    .catch(error => {
                        console.error("Грешка при зареждане на валутите, пускам резервни:", error);
                        
                        const backupContent = `
                            <span>EUR/USD 1.0850</span>
                            <span>EUR/TRY 35.2040</span>
                            <span>EUR/GBP 0.8420</span>
                            <span>EUR/EUR 1.0000</span>
                        `;
                        tickerStream.innerHTML = backupContent + backupContent;
                    });
            });