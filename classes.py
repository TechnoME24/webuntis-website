import webuntis
import datetime

class Untis:
    def __init__(self, server, username, password, school, useragent, className):
        self.server = server
        self.username = username
        self.password = password
        self.school = school
        self.useragent = useragent
        self.className = className
        self.lesson_starttimes = [
            datetime.time(hour=7, minute=50),
            datetime.time(hour=8, minute=40),
            datetime.time(hour=9, minute=45),
            datetime.time(hour=10, minute=35),
            datetime.time(hour=11, minute=30),
            datetime.time(hour=12, minute=20),
            datetime.time(hour=13, minute=10),
            datetime.time(hour=13, minute=55),
            datetime.time(hour=14, minute=45)
        ]

    def getTimetable(self, day=datetime.date.today()):
        #login to webuntis API
        s = webuntis.Session(
            server = self.server,
            username = self.username,
            password = self.password,
            school = self.school,
            useragent = self.useragent
        ).login()

        #get needet data from webuntis API
        suj = s.subjects()
        klasse = s.klassen().filter(name=self.className)[0]
        tt = s.timetable(klasse=klasse, start=day, end=day)
        s.logout()

        # sort lessons by starttime
        lessons_sorted = []

        for time in self.lesson_starttimes:
            time = datetime.datetime.combine(day, time)
            lessons_sorted.append(tt.filter(start=time))

        timetable = []

        for lessons in lessons_sorted:
            l = len(lessons)

            if l == 0:
                timetable.append(["empty"])
            else:

                to_append = []
                for i in range(len(lessons)):
                    code = lessons[i].code

                    if code is None:
                        to_append.append(suj.filter(
                            id=lessons[i].subjects[0].id)[0].name)
                    else:

                        if code == "cancelled":
                            to_append.append(
                                '--' +
                                suj.filter(id=lessons[i].subjects[0].id)[0].name
                            )
                        if code == "irregular":
                            try:
                                to_append.append(
                                    '++' +
                                    suj.filter(id=lessons[i].subjects[0].id)[
                                        0].name
                                )
                            except IndexError:
                                to_append.append("failed")
                timetable.append(to_append)
        return timetable

    def getTimetableThisWeek(self):
        timetableWeek = []
        today = datetime.date.today()
        monday = today - datetime.timedelta(days=today.weekday())
        wd = ["Mo", "Di", "Mi", "Do", "Fr"]

        for i in range(5):
            day = monday + datetime.timedelta(days=i)
            timetableWeek.append(self.getTimetable(day))
        return timetableWeek