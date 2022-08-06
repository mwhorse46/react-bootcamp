import React from 'react';

const SurveyForm = () => {
    return (
        <div className='survey_form'>
            
            <div className="survey-block">
                <form>
                    <h1>Course Evaluation Survey</h1>
                    <h4>COURSE</h4>
                    <input type="text"/>
                    <h4>INSTRUCTOR</h4>
                    <input type="text"/>
                    <h4>TERM AND YEAR</h4>
                    <input type="text"/>
                    <h5>Teaching approaches</h5>
                    <div>
                    <h4>Untitled</h4>
                    <table>
                        <tr>
                        <th className="first-col"></th>
                        <th>Strongly Disagree</th>
                        <th>Disagree</th>
                        <th>Neutral</th>
                        <th>Agree</th>
                        <th>Strongly Agree</th>
                        </tr>
                        <tr>
                        <td className="first-col">1. The instructor stimulated my interest in the subject.</td>
                        <td><input type="radio" value="none" name="interest" /></td>
                        <td><input type="radio" value="none" name="interest" /></td>
                        <td><input type="radio" value="none" name="interest" /></td>
                        <td><input type="radio" value="none" name="interest" /></td>
                        <td><input type="radio" value="none" name="interest" /></td>
                        </tr>
                        <tr>
                        <td className="first-col">2. The instructor managed classNameroom time and pace well.</td>
                        <td><input type="radio" value="none" name="managed" /></td>
                        <td><input type="radio" value="none" name="managed" /></td>
                        <td><input type="radio" value="none" name="managed" /></td>
                        <td><input type="radio" value="none" name="managed" /></td>
                        <td><input type="radio" value="none" name="managed" /></td>
                        </tr>
                        <tr>
                        <td className="first-col">3. The instructor was organized and prepared for every className</td>
                        <td><input type="radio" value="none" name="organized" /></td>
                        <td><input type="radio" value="none" name="organized" /></td>
                        <td><input type="radio" value="none" name="organized" /></td>
                        <td><input type="radio" value="none" name="organized" /></td>
                        <td><input type="radio" value="none" name="organized" /></td>
                        </tr>
                        <tr>
                        <td className="first-col">4. The instructor encouraged discussions and responded to questions.</td>
                        <td><input type="radio" value="none" name="encouraged" /></td>
                        <td><input type="radio" value="none" name="encouraged" /></td>
                        <td><input type="radio" value="none" name="encouraged" /></td>
                        <td><input type="radio" value="none" name="encouraged" /></td>
                        <td><input type="radio" value="none" name="encouraged" /></td>
                        </tr>
                        <tr>
                        <td className="first-col">5. The instructor demonstrated in-depth knowledge of the subject.</td>
                        <td><input type="radio" value="none" name="demonstrated" /></td>
                        <td><input type="radio" value="none" name="demonstrated" /></td>
                        <td><input type="radio" value="none" name="demonstrated" /></td>
                        <td><input type="radio" value="none" name="demonstrated" /></td>
                        <td><input type="radio" value="none" name="demonstrated" /></td>
                        </tr>
                        <tr>
                        <td className="first-col">6. The instructor appeared enthusiastic and interested.</td>
                        <td><input type="radio" value="none" name="appeared" /></td>
                        <td><input type="radio" value="none" name="appeared" /></td>
                        <td><input type="radio" value="none" name="appeared" /></td>
                        <td><input type="radio" value="none" name="appeared" /></td>
                        <td><input type="radio" value="none" name="appeared" /></td>
                        </tr>
                        <tr>
                        <td className="first-col">7. The instructor used a variety of instructional methods to reach the course objectives (e.g. group discussions, student presentations, etc.)</td>
                        <td><input type="radio" value="none" name="used" /></td>
                        <td><input type="radio" value="none" name="used" /></td>
                        <td><input type="radio" value="none" name="used" /></td>
                        <td><input type="radio" value="none" name="used" /></td>
                        <td><input type="radio" value="none" name="used" /></td>
                        </tr>
                        <tr>
                        <td className="first-col">8. The instructor challenged students to do their best work.</td>
                        <td><input type="radio" value="none" name="challenged" /></td>
                        <td><input type="radio" value="none" name="challenged" /></td>
                        <td><input type="radio" value="none" name="challenged" /></td>
                        <td><input type="radio" value="none" name="challenged" /></td>
                        <td><input type="radio" value="none" name="challenged" /></td>
                        </tr>
                    </table>
                    </div>
                    <p className="question">9. The instructor was accessible outside of className.</p>
                    <div className="question-answer">
                    <label><input type="radio" value="none" name="accessible" /> yes</label>
                    <label><input type="radio" value="none" name="accessible" /> no</label>
                    </div>
                    <p className="question">10. Did the instructor actively attempt to prevent cheating in this course?</p>
                    <div className="question-answer">
                    <label><input type="radio" value="none" name="actively" /> yes</label>
                    <label><input type="radio" value="none" name="actively" /> no</label>
                    </div>
                    <p className="comments">Comments</p>
                    <textarea rows="5"></textarea>
                    <h5>Feedback and assessment</h5>
                    <div>
                    <h4>Untitled</h4>
                    <table>
                        <tr>
                        <th className="first-col"></th>
                        <th>Strongly Disagree</th>
                        <th>Disagree</th>
                        <th>Neutral</th>
                        <th>Agree</th>
                        <th>Strongly Agree</th>
                        </tr>
                        <tr>
                        <td className="first-col">11. Information about the assessment was communicated clearly</td>
                        <td><input type="radio" value="none" name="clearly" /></td>
                        <td><input type="radio" value="none" name="clearly" /></td>
                        <td><input type="radio" value="none" name="clearly" /></td>
                        <td><input type="radio" value="none" name="clearly" /></td>
                        <td><input type="radio" value="none" name="clearly" /></td>
                        </tr>
                        <tr>
                        <td className="first-col">12. Feedback was provided within the stated timeframe.</td>
                        <td><input type="radio" value="none" name="provided" /></td>
                        <td><input type="radio" value="none" name="provided" /></td>
                        <td><input type="radio" value="none" name="provided" /></td>
                        <td><input type="radio" value="none" name="provided" /></td>
                        <td><input type="radio" value="none" name="provided" /></td>
                        </tr>
                        <tr>
                        <td className="first-col">13. Feedback showed how to improve my work (e .g. corrections including comments).</td>
                        <td><input type="radio" value="none" name="showed" /></td>
                        <td><input type="radio" value="none" name="showed" /></td>
                        <td><input type="radio" value="none" name="showed" /></td>
                        <td><input type="radio" value="none" name="showed" /></td>
                        <td><input type="radio" value="none" name="showed" /></td>
                        </tr>
                    </table>
                    </div>
                    <p className="comments">Comments</p>
                    <textarea rows="5"></textarea>
                    <h5>Resources and administration</h5>
                    <div>
                    <h4>Untitled</h4>
                    <table>
                        <tr>
                        <th className="first-col"></th>
                        <th>Strongly Disagree</th>
                        <th>Disagree</th>
                        <th>Neutral</th>
                        <th>Agree</th>
                        <th>Strongly Agree</th>
                        </tr>
                        <tr>
                        <td className="first-col">14. The course was supported by adequate library resources.</td>
                        <td><input type="radio" value="none" name="supported" /></td>
                        <td><input type="radio" value="none" name="supported" /></td>
                        <td><input type="radio" value="none" name="supported" /></td>
                        <td><input type="radio" value="none" name="supported" /></td>
                        <td><input type="radio" value="none" name="supported" /></td>
                        </tr>
                        <tr>
                        <td className="first-col">15. Blackboard resources for the course were useful.</td>
                        <td><input type="radio" value="none" name="resources" /></td>
                        <td><input type="radio" value="none" name="resources" /></td>
                        <td><input type="radio" value="none" name="resources" /></td>
                        <td><input type="radio" value="none" name="resources" /></td>
                        <td><input type="radio" value="none" name="resources" /></td>
                        </tr>
                        <tr>
                        <td className="first-col">16. Instructor gave guidance on where to find resources.</td>
                        <td><input type="radio" value="none" name="guidance" /></td>
                        <td><input type="radio" value="none" name="guidance" /></td>
                        <td><input type="radio" value="none" name="guidance" /></td>
                        <td><input type="radio" value="none" name="guidance" /></td>
                        <td><input type="radio" value="none" name="guidance" /></td>
                        </tr>
                    </table>
                    </div>
                    <p className="comments">Comments</p>
                    <textarea rows="5"></textarea>
                    <h5>Additional question</h5>
                    <div className="additional-question">
                    <h4>Untitled</h4>
                    <table>
                        <tr>
                        <th className="first-col"></th>
                        <th>Yes</th>
                        <th>No</th>
                        </tr>
                        <tr>
                        <td className="first-col">17. The syllabus was explained at the beginning of the course.</td>
                        <td><input type="radio" value="none" name="syllabus" /></td>
                        <td><input type="radio" value="none" name="syllabus" /></td>
                        </tr>
                        <tr>
                        <td className="first-col">18. The course was delivered as outlined in the syllabus.</td>
                        <td><input type="radio" value="none" name="delivered" /></td>
                        <td><input type="radio" value="none" name="delivered" /></td>
                        </tr>
                        <tr>
                        <td className="first-col">19. Instructor explained the grading criteria of the course.</td>
                        <td><input type="radio" value="none" name="criteria" /></td>
                        <td><input type="radio" value="none" name="criteria" /></td>
                        </tr>
                        <tr>
                        <td className="first-col">20. Exams related to the course learning outcomes.</td>
                        <td><input type="radio" value="none" name="exams" /></td>
                        <td><input type="radio" value="none" name="exams" /></td>
                        </tr>
                        <tr>
                        <td className="first-col">21. Projects/ assignments related to the course learning outcomes.</td>
                        <td><input type="radio" value="none" name="assignments" /></td>
                        <td><input type="radio" value="none" name="assignments" /></td>
                        </tr>
                    </table>
                    </div>
                    <p className="comments">Comments</p>
                    <textarea rows="5"></textarea>
                    <h5>Overall experience</h5>
                    <p className="question">22. This was a worthwhile className</p>
                    <div className="question-answer">
                    <label><input type="radio" value="none" name="worthwhile" /> yes</label>
                    <label><input type="radio" value="none" name="worthwhile" /> no</label>
                    </div>
                    <p className="question">23. Would you recommend this course to a fellow
                    student?
                    </p>
                    <div className="question-answer">
                    <label><input type="radio" value="none" name="recommend" /> yes</label>
                    <label><input type="radio" value="none" name="recommend" /> no</label>
                    </div>
                    <div>
                    <h4>Untitled</h4>
                    <table>
                        <tr>
                        <th className="first-col"></th>
                        <th>Poor</th>
                        <th>Fair</th>
                        <th>Good</th>
                        <th>Very good</th>
                        <th>Excellent</th>
                        </tr>
                        <tr>
                        <td className="first-col">24. Overall, how do you rate your experience in this course?</td>
                        <td><input type="radio" value="none" name="rate" /></td>
                        <td><input type="radio" value="none" name="rate" /></td>
                        <td><input type="radio" value="none" name="rate" /></td>
                        <td><input type="radio" value="none" name="rate" /></td>
                        <td><input type="radio" value="none" name="rate" /></td>
                        </tr>
                    </table>
                    </div>
                    <div className="course-rate">
                    <h4>Untitled</h4>
                    <table>
                        <tr>
                        <th className="first-col"></th>
                        <th>A:0 – 4h</th>
                        <th>B:5 – 8h</th>
                        <th>C:9 – 12h</th>
                        <th>C:9 – 12h</th>
                        </tr>
                        <tr>
                        <td className="first-col">25. Overall, how do you rate your experience in this course?</td>
                        <td><input type="radio" value="none" name="name" /></td>
                        <td><input type="radio" value="none" name="name" /></td>
                        <td><input type="radio" value="none" name="name" /></td>
                        <td><input type="radio" value="none" name="name" /></td>
                        </tr>
                    </table>
                    </div>
                    <p className="comments">Comments</p>
                    <textarea rows="5"></textarea>
                    <h5>Student self evaluation</h5>
                    <div>
                    <h4>Untitled</h4>
                    <table>
                        <tr>
                        <th className="first-col"></th>
                        <th>Strongly Disagree</th>
                        <th>Disagree</th>
                        <th>Neutral</th>
                        <th>Agree</th>
                        <th>Strongly Agree</th>
                        </tr>
                        <tr>
                        <td className="first-col">26. I contributed constructively during in-className activities</td>
                        <td><input type="radio" value="none" name="contributed" /></td>
                        <td><input type="radio" value="none" name="contributed" /></td>
                        <td><input type="radio" value="none" name="contributed" /></td>
                        <td><input type="radio" value="none" name="contributed" /></td>
                        <td><input type="radio" value="none" name="contributed" /></td>
                        </tr>
                        <tr>
                        <td className="first-col">27. I feel I am achieving the learning outcomes.</td>
                        <td><input type="radio" value="none" name="feel" /></td>
                        <td><input type="radio" value="none" name="feel" /></td>
                        <td><input type="radio" value="none" name="feel" /></td>
                        <td><input type="radio" value="none" name="feel" /></td>
                        <td><input type="radio" value="none" name="feel" /></td>
                        </tr>
                    </table>
                    </div>
                    <p className="comments">Comments</p>
                    <textarea rows="5"></textarea>
                    <h5>Comments on strengths and ways of improvement</h5>
                    <p className="comments">What changes would you recommend to improve this course?</p>
                    <textarea rows="5"></textarea>
                    <p className="comments">What did you like best about your instructors teaching?</p>
                    <textarea rows="5"></textarea>
                    <p className="comments">What did you like least about your instructor’s teaching?</p>
                    <textarea rows="5"></textarea>
                    <p className="comments">Any further, constructive comment</p>
                    <textarea rows="5"></textarea>
                    <div className="btn-block">
                    <button type="submit" href="/">Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SurveyForm;