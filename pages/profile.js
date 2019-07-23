import Container from '../components/container';

function Profile({ user }) {
  return (
    <Container>
      <img
        src={user.picture}
        alt={user.displayName}
        class="rounded-full mx-auto w-1/5 mt-12 mb-6"
      />
      <div class="md:w-1/3 w-full mx-auto m">
        <h2 class="text-center text-3xl font-mono tracking-wider">
          {user.displayName}
        </h2>
        <h3 class="text-center mt-4 text-xl">Region: Seattle</h3>
        <h3 class="text-center mt-4 text-xl">Instrument(s): Piano, clarinet</h3>
        <h3 class="text-center mt-4 text-xl">
          Address: 1343 130th pl se Kirkland, 98022, WA
        </h3>
        <h3 class="text-center mt-4 text-xl">Driving range: 12 miles</h3>
      </div>
    </Container>
  );
}

export default Profile;
