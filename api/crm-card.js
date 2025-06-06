export default function handler(req, res) {
  const egAccIdRaw = req.query.eg_acc_id;
  const egAccId = Array.isArray(egAccIdRaw) ? egAccIdRaw[0] : (egAccIdRaw || '').trim();

  const embedUri = `https://hubspot-crm-card-three.vercel.app/api/embed?eg_acc_id=${encodeURIComponent(egAccId)}`;

  res.status(200).json({
    results: [
      {
        objectId: 1,
        title: "View in Evergrowth",
        link: null,
        actions: [
          {
            type: "IFRAME",
            width: 890,
            height: 748,
            uri: embedUri,
            label: "Open Evergrowth"
          }
        ]
      }
    ]
  });
}
