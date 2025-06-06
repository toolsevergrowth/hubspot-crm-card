export default function handler(req, res) {
  const egAccId = req.query.eg_acc_id || '';
  const targetUrl = `https://app.evergrowth.com/accounts/${egAccId}`;

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Evergrowth Viewer</title>
      <style>
        body, html {
          margin: 0;
          padding: 0;
          background-color: #F5F5F5;
          font-family: 'Inter', sans-serif;
        }
        .content-wrapper {
          padding: 30px;
          background-color: #F5F5F5;
          border-radius: 8px;
        }
        .iframe-crop-container {
          width: 100%;
          height: 900px;
          overflow: hidden;
          position: relative;
          border: none;
        }
        #iframeContainer {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 900px;
          transform: scale(0.9);
          transform-origin: 0 0;
          width: 111.11%;
          margin: 0 auto;
        }
        iframe {
          position: absolute;
          top: 0;
          left: -60px;
          width: calc(100% + 60px);
          height: 900px;
          border: none;
        }
        .empty-message {
          text-align: center;
          padding: 50px 0;
          font-size: 18px;
          color: #333;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-height: 300px;
        }
      </style>
    </head>
    <body>
      ${egAccId ? `
        <div class="content-wrapper">
          <div id="iframeContainer" style="display:none;">
            <div class="iframe-crop-container">
              <iframe id="accViewFrame" src="${targetUrl}" scrolling="yes"></iframe>
            </div>
          </div>
        </div>
        <script>
          document.getElementById('accViewFrame').onload = function() {
            document.getElementById('iframeContainer').style.display = 'block';
          };
        </script>
      ` : `
        <div class="content-wrapper">
          <div class="empty-message">
            Evergrowth does not have access to this account yet.<br/>
            The data integration is coming soon.
          </div>
        </div>
      `}
    </body>
    </html>
  `;

  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
}
