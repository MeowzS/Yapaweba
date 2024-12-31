// Contoh sederhana: Memeriksa apakah user-agent mencurigakan (hanya contoh simbolis).
// Untuk perlindungan DDoS sungguhan, Anda harus menggunakan solusi di sisi server/WAF.

document.addEventListener('DOMContentLoaded', () => {
  const suspiciousAgents = ['some-attack-bot', 'bad-bot']; // Contoh pattern
  const currentAgent = navigator.userAgent.toLowerCase();

  // Jika deteksi simple (tidak akurat) mendeteksi agen mencurigakan
  const isSuspicious = suspiciousAgents.some(bot => currentAgent.includes(bot));
  if (isSuspicious) {
    alert('Terdeteksi user-agent mencurigakan! Akses Anda mungkin diblokir.');
  }
  console.log('Website siap dan berjalan...');
});
