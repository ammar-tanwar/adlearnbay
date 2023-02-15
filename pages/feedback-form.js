import React from 'react'
import styles from "../styles/Home.module.css";

function demoo() {
  return (
    <div className={styles.demoPage}>
      <title>Feedback Form</title>
        <meta name="description" content="Learnbay Courses" />
        <link rel="icon" href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png" />
      <h1>Learnbay's Feedback Form</h1>
        <script src="https://desk.zoho.in/portal/api/feedbackwidget/85991000000257003?orgId=60016613471&displayType=iframe"></script>
        <script src="https://desk.zoho.in/portal/api/feedbackwidget/85991000000257003?orgId=60016613471&displayType=embeded"></script>
        <script src="https://desk.zoho.in/portal/api/feedbackwidget/85991000000257003?orgId=60016613471&displayType=popout"></script>

        <div>
        <iframe id="zsfeedbackFrame" name="zsfeedbackFrame" allowtransparency="false" frameborder="0" border="0" src="https://desk.zoho.in/support/fbw?formType=AdvancedWebForm&fbwId=edbsne079bebdb1b3ee809dd0654e01318b2baa03f46e52f10f6684c966f7ad65c7b0&xnQsjsdp=edbsnddcd56cf9cfe8ff42b66ae5ae1e46c8b&mode=showNewWidget&displayType=iframe"></iframe>
<div id="zsfeedbackwidgetdiv"></div>

        </div>
    </div>
    
  )
}

export default demoo