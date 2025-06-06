export default function handler(req, res) {
  const egAccIdRaw = req.query.eg_acc_id;
  const egAccId = Array.isArray(egAccIdRaw) ? egAccIdRaw[0] : (egAccIdRaw || '').trim();

  const embedUri = `https://hubspot-crm-card-three.vercel.app/api/embed?eg_acc_id=${encodeURIComponent(egAccId)}`;
  const directLink = `https://app.evergrowth.com/accounts/${encodeURIComponent(egAccId)}`;

  res.status(200).json({
    results: [
      {
        objectId: 1,
        title: "", // leave blank; no awkward dots
        link: null,
        properties: [
          {
            label: "",
            dataType: "STRING",
            value: `
              <div style="text-align:center; margin-bottom: 20px;">
                <img src="https://hubspot-crm-card-three.vercel.app/logo.png" alt="Evergrowth Logo" style="height: 40px; margin-bottom: 12px;" />
              </div>
              <div style="text-align:center;">
                <a href="${directLink}" target="_blank" style="display:inline-block; margin-top: 10px; background:#F0F4F7; color:#0064FF; padding:8px 16px; border-radius:6px; font-weight:600; text-decoration:none;">
                  Open in new tab →
                </a>
              </div>
            `
          }
        ]
      }
    ],
    primaryAction: {
      type: "IFRAME",
      width: 890,
      height: 748,
      uri: embedUri,
      label: "Open Evergrowth"
    }
  });
}
