mergeInto(LibraryManager.library, {
    sendResultToJs: function(result) {
        const jsonStr = UTF8ToString(result);
        try {
            const data = JSON.parse(jsonStr);
            console.log("Unity Result:", data);
            alert(`Battle Result\nWinner: ${data.winner} (${data.winnerScore})\nLoser: ${data.loser} (${data.loserScore})`);
        } catch (e) {
            console.error("JSON parsing error:", e, jsonStr);
        }
    }
});
