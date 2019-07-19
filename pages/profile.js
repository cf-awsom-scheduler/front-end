import Container from '../components/container';

function Profile({ user }) {
  return (
    <Container>
      <img
        src={user.picture}
        alt={user.displayName}
        class="rounded-full mx-auto w-1/4"
      />
      <div class="w-1/3 mx-auto m">
        <h2 class="text-center text-3xl">{user.displayName}</h2>
      </div>
    </Container>
  );
}

export default Profile;
