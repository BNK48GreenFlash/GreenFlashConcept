function tweetMessage() {
    const message = "Arlee GreenFlash #GreenFlashConceptDay1 #BNK48
#BNK4818thSINGLE";
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;
    window.open(tweetUrl, '_blank');
}  
