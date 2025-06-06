export default function handler(req, res) {
  const egAccId = req.query.eg_acc_id || 'default';

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
            uri: `https://app.evergrowth.com/CO2a9a317709a5f7d5e85830b0b9ce/accounts/${egAccId}`,
            label: "Open Evergrowth",
            associatedObjectProperties: ["eg_acc_id"]
          }
        ]
      }
    ]
  });
}
