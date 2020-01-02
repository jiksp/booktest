import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import CameraIcon from "@material-ui/icons/PhotoCamera"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import CssBaseline from "@material-ui/core/CssBaseline"
import Grid from "@material-ui/core/Grid"

import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import Link from "@material-ui/core/Link"

import BottomButton from "../bottombutton"
import { useTheme, createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import Avatar from "@material-ui/core/Avatar"
import { Query } from "react-apollo"
import { MAIN_PAGE } from "../queries"

const theme = createMuiTheme({
  palette: {
    type: "dark" // Switching the dark mode on is a single property value change.
  }
})

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardMediaDefault: {
    paddingTop: "56.25%", // 16:9
    backgroundColor: "rgba(0, 0, 0, 0.7)"
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}))

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const Main = () => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Avatar className={classes.icon} src="/broken-image.jpg" />

          <Typography variant="h6" color="inherit" noWrap>
            나만의 서재
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h5" align="center" color="textPrimary" gutterBottom>
              지경섭님의 도서 리스트
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <Query query={MAIN_PAGE}>
                    {({ loading, data, error }) => {
                      if (loading) return "loading"
                      if (error) return "error!!"
                      // return data.books.map(book => (
                      //   <React.Fragment>
                      //     <CardMedia
                      //       className={classes.cardMedia}
                      //       key={book.id}
                      //       id={book.id}
                      //       image={book.thumbnail}
                      //       title={book.title}
                      //     />
                      return data.movies.map(movie => (
                        <React.Fragment>
                          <CardMedia
                            className={classes.cardMedia}
                            id={movie.id}
                            key={movie.id}
                            image={movie.medium_cover_image}
                            title={movie.title}
                            rating={movie.rating}
                          />

                          <CardContent className={classes.cardContent}>
                            {/* <Typography gutterBottom variant="h5" component="h2">
                              {book.title}
                            </Typography>
                            <Typography>{book.author}</Typography> */}

                            <Typography gutterBottom variant="h5" component="h2">
                              {movie.title}
                            </Typography>
                            <Typography>{movie.rating}</Typography>
                          </CardContent>
                        </React.Fragment>
                      ))
                    }}
                  </Query>
                  {/* <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  /> */}
                  {/* <CardMedia className={classes.cardMediaDefault} /> */}

                  <CardActions>
                    <Button size="small" color="primary">
                      삭제
                    </Button>
                    <Button size="small" color="primary">
                      수정
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  )
}
export default Main
