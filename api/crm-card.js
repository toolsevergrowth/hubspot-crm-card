export default function handler(req, res) {
  const egAccId = req.query.eg_acc_id || 'missing';

  const embedUrl = `https://hubspot-crm-card-three.vercel.app/api/embed?eg_acc_id=${encodeURIComponent(egAccId)}`;

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
            uri: embedUrl,
            label: "Open Evergrowth",
            associatedObjectProperties: ["eg_acc_id"]
          }
        ]
      }
    ]
  });
}
